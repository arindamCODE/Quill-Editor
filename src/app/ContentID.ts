
export class ContentID {
    id: number;
    value: string;
    metaTags: string;
    favourites: boolean;
    users: string;
    isDelete: boolean;

    constructor(id: number, value: string, metaTags: string, favourites: boolean, users: string, isDelete: boolean) {
        this.id = id;
        this.value = value;
        this.metaTags = metaTags;
        this.favourites = favourites;
        this.users = users;
        this.isDelete = isDelete;
    }

}