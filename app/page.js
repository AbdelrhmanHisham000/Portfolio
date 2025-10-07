import { Cinzel_Decorative } from "next/font/google";

import LandingPage from "./_components/pages/LandingPage";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});



export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}


