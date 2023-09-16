import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Overview from "../components/Overview";
import Schedule from "../components/Schedule";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <Intro />
        <Overview />
        <Faqs />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}
