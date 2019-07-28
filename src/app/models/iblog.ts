export interface IBLOG {
    id: number;
    title: string;
    url: string;
    content: string;
    date: string;
    clapping?: number;
}

export interface IUPDATE {
    clapping: number;
}
