import { Type as ArtistType } from './ArtistDTO';

export type Type = {
    spotify_id: string;
    spotify_url: string;
    spotify_site_url: string;
    title: string;
    chorus_audio_url: string;
    artists: ArtistType[];
};

export const Song: Type = {
    spotify_id: '',
    spotify_url: '',
    spotify_site_url: '',
    title: '',
    chorus_audio_url: '',
    artists: [],
};
