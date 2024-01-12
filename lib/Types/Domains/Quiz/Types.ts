export type ArtistType = {
    spotify_id: string;
    spotify_url: string;
    spotify_site_url: string;
    name: string;
};

export type SongType = {
    spotify_id: string;
    spotify_url: string;
    spotify_site_url: string;
    title: string;
    chorus_audio_url: string;
    artists: ArtistType[];
};
