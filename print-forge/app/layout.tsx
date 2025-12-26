
import { subscribe } from "diagnostics_channel";
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Image from "next/image";
import NavIcon from "@/public/printforge-logo.svg"
import Link from "next/link";
import { RootLayoutType } from "./types";


const alberSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display:"swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})


export default function RootLayout({children}: RootLayoutType ) {
  return (
    <html lang="en">
      <body className={`${alberSans.className} ${montserratAlternates.variable}`}>
        <header>
          <div className="logo">
            <Link href="/"><Image src={NavIcon} alt="logo" /></Link>
          </div>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
