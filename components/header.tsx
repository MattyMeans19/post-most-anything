import Image from "next/image";
import Logo from "@/assets/PMA_Icon.png";

//Header component to go in root layout.tsx, uses TailwindCSS properties.

export default function BlogHeader(){
    return(
        <div className="flex flex-nowrap place-items-center gap-5 border-b-5 pb-5 border-gray-400 w-full justify-center shadow-2xl shadow-gray-500/25">
            <Image src={Logo} alt="Blog Logo"/>
            <h1 className="text-6xl">Post 'Most Anything</h1>
        </div>
    )
}