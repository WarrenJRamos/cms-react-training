export type ComicData = {
    id: number,
    thumbnail: Thumbnail,
    title: string,
    issueNumber: number,
    dates: Date[],
    creators: Creator,
}

export type Thumbnail = {
    extension: string,
    path: string,
}

export type Date = {
    date: string,
    type: string,
}

export type Creator = {
    items: CreatorItem[],
}

export type CreatorItem = {
    name: string,
}