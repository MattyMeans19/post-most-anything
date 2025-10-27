import Navbar from "@/components/navbar";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div className="flex flex-col">
            <Navbar />
            <main>{children}</main>
        </div>
    )
}