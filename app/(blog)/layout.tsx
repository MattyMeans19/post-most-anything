import Navbar from "@/components/navbar";
import { verifySession } from "@/lib/dal";
import { isRedirectError } from "next/dist/client/components/redirect-error";


export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
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