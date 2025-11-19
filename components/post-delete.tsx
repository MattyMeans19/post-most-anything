'use client';
import { DeletePost } from "@/actions/post-actions";
import { revalidatePath } from "next/cache";

export default function DeleteButton(){

    async function Delete(){
    let request = await DeletePost(1);
        
    if(request?.message){
        alert(request.message);
    } else {
        alert("Post Deleted!")
        revalidatePath("/home");
        revalidatePath("/posts");
    }
    
    return(
        <button className="submitButton p-2 text-2xl mt-[-15]" onClick={() => (Delete)}>Delete</button>
    )
}

}