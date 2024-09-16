import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { Suspense } from "react";
import AuthProvider from "./auth/Provider";
import Script from "next/script";
import ThirdParyScripts from "./ThridPartyScripts";
import localFont from "next/font/local"


const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500'], 
  variable:"--font-robot"
})

// const poppins= localFont({
//   src:"../public/fonts/font_file_name"
// })

export const metadata: Metadata = {
  title: "Godiwn Learning Next",
  description: "I learnt next with codewithmosh app",
  openGraph:{
    title:"...", 
    description:"..."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <ThirdParyScripts />
      {/* <body className={poppins.className}> */}  {/* <body className={poppins.variable}> */}
      <body className={roboto.variable}>
        <AuthProvider>
          <NavBar />
          <main>
            {/* <Suspense fallback={<p>Loading...</p>}> */}
            {children}
            {/* </Suspense> */}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
