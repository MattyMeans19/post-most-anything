import LoginForm from "@/components/login-form";
import { GetCurrentUser } from "@/lib/data";
import { redirect } from "next/navigation";

export default async function Login(){

    const currentUser = await GetCurrentUser();

    if(currentUser != undefined){
        redirect("/home")
    }

    return(
        <LoginForm />
    )
}