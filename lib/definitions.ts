export type User ={
    fName: string,
    lName: string,
    userName: string,
    password: string,
    dob: Date
    userID: number
}

export type Post ={
    title: string,
    image: string,
    content: string,
    creator: string,
    date: Date,
    postId: number, 
    upvotes: number, 
    comments: number
}

export type Comment ={
    postId: number,
    content: string,
    creator: string,
    date: Date
}