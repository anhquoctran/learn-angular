export class Post {
    userId:number;
    id:number;
    title:string;
    body:string;

    static fromJSON(json): Post {
        if(json === null || json === undefined) return undefined;
        const post = new Post();
        post.title = json.title;
        post.id = json.id;
        post.body = json.body;
        post.userId = json.userId;

        return post;
    }
}

export class Comment {
    postId: number;
    id:number;
    name:string;
    body:string;

    static fromJSON(json) {
        if(json === null || json === undefined) return undefined;
        const comment = new Comment();
        comment.id = json.id;
        comment.postId = json.postId;
        comment.name = json.name;
        comment.body = json.body;

        return comment;
    }
}