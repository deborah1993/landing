import Nav from "./components/navbar";
import { Providers } from "./providers";
import "./globals.css";
import Footer from "./components/footer";
import { Noto_Sans } from 'next/font/google'
import { Metadata } from "next";
 
const notosans = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-NotoSans'
})
 
export const metadata: Metadata = {
  title: "LandTech",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`landtech ${notosans.className}`}>
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}