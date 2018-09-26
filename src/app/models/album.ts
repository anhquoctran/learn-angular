export class Album {
    userId:number;
    id:number;
    title:number;

    static fromJSON(json): Album {
        if(json === null || json === undefined) return undefined;
        const album = new Album();
        album.id = json.id;
        album.userId = json.userId;
        album.title = json.title;

        return album;
    }
}

export class Photo {
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;

    static fromJSON(json): Photo {
        if(json === null || json === undefined) return undefined;
        const photo = new Photo();
        photo.id = json.id;
        photo.albumId = json.albumId;
        photo.title = json.title;
        photo.url = json.url;
        photo.thumbnailUrl = json.thumbnailUrl;
        
        return photo;
    }
}