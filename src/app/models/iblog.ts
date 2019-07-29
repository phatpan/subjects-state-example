export interface IBLOG {
    id: number;
    title: string;
    url: string;
    content: string;
    date: string;
    clap?: number;
}

export interface IUPDATE {
    clap: number;
}
