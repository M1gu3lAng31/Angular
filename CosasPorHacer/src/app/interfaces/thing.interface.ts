export interface Thing{
    ok:string,
    Things:Array<contentThing>
}

export interface contentThing{
    complete:boolean,
    created_data:string,
    thing:string,
    _id:string
}