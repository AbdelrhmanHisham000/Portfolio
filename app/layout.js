import "./globals.css";
import SideBar from "./_components/SideBar";
import { Google_Sans_Code } from "next/font/google";
import { MdOutlineMenu } from "react-icons/md";
import SideBarWrapper from "./_components/SideBarWrapper";

const googleSans = Google_Sans_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bitcount",
});

export const metadata = {
  title: 'Abdelrhman Hisham | Developer Portfolio',
  description:
    'Portfolio website of Abdelrhman Hisham: Web Developer, Designer, and Creator.',
  openGraph: {
    title: 'Abdelrhman Hisham | Developer Portfolio',
    description:
      'Portfolio website of Abdelrhman Hisham: Web Developer, Designer, and Creator.',
    url: 'https://abdelrhmanhisham-portfolio.vercel.app/',
    siteName: 'Abdelrhman Hisham',
    images: [
      {
        url: 'https://abdelrhmanhisham-portfolio.vercel.app/img1.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdelrhman Hisham Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdelrhman Hisham | Developer Portfolio',
    description:
      'Portfolio website of Abdelrhman Hisham: Web Developer, Designer, and Creator.',
    images: ['https://abdelrhmanhisham-portfolio.vercel.app/img1.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${googleSans.variable} antialiased`}>
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-80 h-full hidden md:block bg-white shadow-lg">
            <SideBar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-[#141313] text-white overflow-y-auto">
            <div className="container mx-auto px-10">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
