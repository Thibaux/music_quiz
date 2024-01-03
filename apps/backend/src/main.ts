import express from 'express';
import cors from 'cors';
import SpotifyWebApi from 'spotify-web-api-node';
import Router from "src/Http/Routes/Router";

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
	cors({
		origin: '*',
	})
);

app.use(Router)

app.get('/artist', async (req, res) => {
	const {token} = req.headers;
	const {search} = req.query;

	if (!token) {
		throw new Error('Token not provided.');
	}

	if (!search) {
		throw new Error('Search term not provided.');
	}

	const spotifyApi = new SpotifyWebApi({
		accessToken: token as string,
	});

	const {body} = (await spotifyApi.search(search as string, [
		'artist',
	])) as any;

	res.json({data: body.artists});
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
