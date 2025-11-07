export type UserBasicInfo ={
  fname: string,
  lname: string,
  username: string,
}

export interface UserInfo extends UserBasicInfo{
    password: string,
    dob: Date,
    userid: number
}

export type Post ={
    postid: number,
    title: string,
    post: string,
    creator: string,
    postdate: Date, 
    upvotes: number, 
    replies: number
}

export type Comment ={
    postId: number,
    content: string,
    creator: string,
    date: Date
}

export type FormState =
  | {
      errors?: {
        username?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
    username: string, 
    expiresAt: Date
  }