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
      <body>
        <BlogHeader />
        {children}
      </body>
    </html>
  );
}
