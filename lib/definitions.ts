export type UserBasicInfo ={
  fname: string,
  lname: string,
  username: string,
  verified: boolean
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
    id: number,
    creator: string,
    postid: number,
    content: string
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