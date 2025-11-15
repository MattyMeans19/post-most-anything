import { getUser } from "@/actions/user-actions"
import { UserBasicInfo } from "@/lib/definitions";


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
                <button className="bg-purple-400 w-full text-3xl py-2 border-3 rounded-full">Create New Post</button>
            </div>

            <div className="h-[35vh] bg-white rounded-4xl border-3 place-items-center p-15">
                <h2 className="text-3xl underline mb-5">Account Settings</h2>
                <label htmlFor="password">Change Password: </label>
                <input type="text" id="password" name="password" placeholder="New Password" className="p-1 border rounded-full text-center"></input>
                <button className="w-20 self-center submitButton mt-5">Save</button>
                <label htmlFor="username">Change Username: </label>
                <input type="text" id="username" name="username" placeholder="New username" className="p-1 border rounded-full text-center"></input>
                <button className="w-20 self-center submitButton mt-5">Save</button>
                <button className="submitButton">Delete Account</button>
            </div>
        </div>
            
        )  
    }

    
}