import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Overview from "../components/Overview";
import Schedule from "../components/Schedule";
import Tracks from "../components/Tracks";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <Header />
      <div className="w-full h-[70vh] items-center justify-center text-center mt-10 z-50 bg-transparent background-gradient">
        <Intro />
      </div>
      <div className="flex flex-1 w-full flex-col items-center justify-center text-center">
        <Overview />
        <Tracks />
        <Faqs />
        <Schedule />
      </div>
      <Footer />
    </div>
  );
}
