import { getUser } from "@/actions/user-actions"
import { UserBasicInfo } from "@/lib/definitions";
import Link from "next/link";
import AccountSettings from "./account";


export default async function UserPanel(){

    let userData: string | UserBasicInfo = await getUser();

    if (typeof userData === 'string'){
        return <p>no data found</p>
    } else {
      return(
        <div className="user-panel">
           <div className="nametag">
                <h1>{userData.username}</h1>
                <p>A.K.A</p>
                <h2>{userData.fname} {userData.lname}</h2>
                <Link className="bg-purple-400 w-full text-center text-3xl p-2 border-3 rounded-full" href="/posts/create-post">Create New Post</Link>
            </div>
            <AccountSettings />
        </div>
            
        )  
    }

    
}