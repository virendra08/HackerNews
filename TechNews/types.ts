export interface PostDetails {
    title: string,
    url: string,
    author: string
}

export interface Hitposts {
    hits: PostDetails[]
}

export type RootStackParamList = {
    Home: undefined,
    Details: { post: PostDetails }
}
