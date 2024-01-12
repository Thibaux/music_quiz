export class Songs {
    private songs: Songs[] = [];

    withSongs(songs: any): Songs {
        this.songs = songs.map((s: any) => {
            return {
                spotify_id: s.id,
                title: s.name,
                chorus_url: s.preview_url,
            };
        });

        return this;
    }

    build() {
        return this.songs;
    }
}
