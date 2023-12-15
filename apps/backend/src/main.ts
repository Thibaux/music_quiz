import express from "express";
import cors from "cors";
import SpotifyWebApi from "spotify-web-api-node"
import querystring from 'querystring';
import axios from "axios";
const app = express()

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/login", async (req, res) => {
  const { code } = req.body
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  try {
    const {
      body: { access_token, refresh_token, expires_in },
    } = await spotifyApi.authorizationCodeGrant(code)

    res.json({ access_token, refresh_token, expires_in })
  } catch (err) {
    res.sendStatus(400)
  }
})

app.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  try {
    const {
      body: { access_token, expires_in },
    } = await spotifyApi.refreshAccessToken()
    res.json({ access_token, expires_in })
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

app.get('/callback', function(req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
  } else {
    const token =  Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + token
      },
      json: true
    };
  }
});

app.get("/artist", async (req, res) => {
  const {token} = req.headers;
  const { search} = req.query;

  if (!token) {
    throw new Error('Token not provided.')
  }

  if (!search) {
    throw new Error('Search term not provided.')
  }

  const spotifyApi = new SpotifyWebApi({
    accessToken: token as string,
  });

  const {body} = await spotifyApi.search(search as string, ["artist"]) as any;

  res.json({data: body.artists})
})

app.get("/user/playlists", async (req, response) => {
  const {authorization} = req.headers;

  if (!authorization) {
    throw new Error('Token not provided.')
  }

  axios.get("https://api.spotify.com/v1/me/playlists", {
    headers: { authorization}
  })
      .then(res => {
        console.log(res);

        response.json({data: res.data})
      })
      .catch((e) => {
        console.log(e);
      })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
