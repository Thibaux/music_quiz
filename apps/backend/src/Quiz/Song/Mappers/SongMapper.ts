import { ArtistMapper } from './ArtistMapper';
import { SongType } from '../../../../../../lib/Types/Domains/Quiz/Types';

export const SongMapper = () => {
    let song = {} as SongType;

    const handle = (track: any): SongType => {
        song.title = track.name;
        song.chorus_audio_url = track.preview_url;
        song.spotify_id = track.id;
        song.spotify_url = track.href;
        song.spotify_site_url = track.external_urls.spotify;
        song.artists = track.artists.map((a: any) => ArtistMapper().handle(a));

        return song;
    };

    return { handle };
};
