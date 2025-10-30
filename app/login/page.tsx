import LoginForm from "@/components/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PMA- Login",
  description: "The everything goes blog site!",
};


export default function Login(){
    
    return(
        <LoginForm />
    )
}