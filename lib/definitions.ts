export type User ={
    fName: string,
    lName: string,
    userName: string,
    password: string,
    dob: Date
    userID: number
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