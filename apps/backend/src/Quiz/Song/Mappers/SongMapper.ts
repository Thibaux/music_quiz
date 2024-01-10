import { Type as SongType } from '../../DTO/SongDTO';
import { ArtistMapper } from './ArtistMapper';

export const SongMapper = () => {
    let song = {} as SongType;

    const handle = (track: any): SongType => {
        song.title = track.name;
        song.chorus_audio_url = track.preview_url;

        song.artists = track.artists.map((a: any) => ArtistMapper().handle(a));
        song.spotify_id = track.id;
        song.spotify_url = track.href;
        song.spotify_site_url = track.external_urls.spotify;

        return song;
    };

    return { handle };
};
