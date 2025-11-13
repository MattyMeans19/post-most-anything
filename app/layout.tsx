import type { Metadata } from "next";
import "./globals.css";
import BlogHeader from "@/components/header";


export const metadata: Metadata = {
  title: "Post Most Anything",
  description: "The everything goes blog site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <body>
        <BlogHeader />
        {children}
      </body>
    </html>
  );
}
