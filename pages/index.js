import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CategoryTile from "../components/tiles";
import Header from "../components/header";
import OverView from "../components/overView";
import Footer from "../components/footer";
import Faqs from "../components/faq";
import Schedule from "../components/schedule";

export default function Home() {
  return (
    <div>
      <Header id="sec-1" />
      <OverView id="sec-2" />
      <CategoryTile />
      <Faqs />
      <Schedule />
      <Footer />
    </div>
  );
}
