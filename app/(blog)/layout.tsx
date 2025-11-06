import Navbar from "@/components/navbar";
import { verifySession } from "@/lib/dal";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
const cookie = (await cookies()).get('session')?.value
    console.log(await decrypt(cookie))
    try{
      await verifySession();
    } catch (error){
      if (isRedirectError(error)){
        throw error;
      }
    }
  
    return(
      <>
        <Navbar />
        <main>{children}</main>
      </>    
    )
}