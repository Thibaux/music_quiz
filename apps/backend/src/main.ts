import express from "express";
import cors from "cors";
import SpotifyWebApi from "spotify-web-api-node"
import querystring from 'querystring';
const app = express()

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello API' });
// });
//
// app.listen(port, host, () => {
//   console.log(`[ ready ] http://${host}:${port}`);
// });

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let sdk;

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

app.get("/beatles", async (req, res) => {
  const { token } = req.query

  const spotifyApi = new SpotifyWebApi({
    accessToken: token as string,
  })

  const response = await spotifyApi.search("The Beatles", ["artist"]) as any;

  // const response = items.items.map((item: any) => {
  //   return {
  //     name: item.name,
  //     followers: item.followers.total,
  //     popularity: item.popularity,
  //   };
  // });

  res.json(response)
})

// app.get('/login', (req, res) => {
//     const api = SpotifyApi.withUserAuthorization(
//         "331d502b9fb242c8b7a1cb8b2ae23f98",
//         "http://localhost:8080/auth",
//     );
//
//     api.currentUser.profile();
// })

// app.post('/auth', (req, res) => {
//     let data = req.body;
//     sdk = SpotifyApi.withAccessToken("331d502b9fb242c8b7a1cb8b2ae23f98", data);
//
//     res.redirect('http://localhost:3000');
// });
//
// const APIController = async () => {
//     const result = await spotifyApi.clientCredentialsGrant({
//         client_id: "331d502b9fb242c8b7a1cb8b2ae23f98",
//         client_secret: "a0fcd7a90430488f9b25ae6551ff15b5"
//     });
//
//     console.log(result);
//     return result;
// }
//
// app.get('/beatles', () => APIController())

// app.get('/beatles', (req, res) => {
//     sdk = SpotifyWebApi.withClientCredentials("331d502b9fb242c8b7a1cb8b2ae23f98", "a0fcd7a90430488f9b25ae6551ff15b5");
//
//     const getSearch = async () => {
//         return await sdk.search("The Beatles", ["artist"]);
//     }
//
//     const i = getSearch();
//
//     res.send(i);
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
