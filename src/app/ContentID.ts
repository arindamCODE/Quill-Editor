
export class ContentID {
    id: number;
    content: string;
    metaTags: string;
    favourites: boolean;
    users: string;

    constructor(id: number, content: string, metaTags: string, favourites: boolean, users: string) {
        this.id = id;
        this.content = content;
        this.metaTags = metaTags;
        this.favourites = favourites;
        this.users = users;
    }

}