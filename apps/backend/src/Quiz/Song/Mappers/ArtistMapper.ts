import { Type as ArtistType } from '../DTO/ArtistDTO';

export const ArtistMapper = () => {
    let artist = {} as ArtistType;

    const handle = (incomingArtist: any): ArtistType => {
        artist.name = incomingArtist.name;

        artist.spotify_id = incomingArtist.id;
        artist.spotify_url = incomingArtist.href;
        artist.spotify_site_url = incomingArtist.external_urls.spotify;

        return artist;
    };

    return { handle };
};
