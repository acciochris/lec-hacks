import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ArrowDown.module.css";
import CategoryTile from "../components/tiles";
import Header from "../components/header";
import OverView from "../components/overView";
import Footer from "../components/footer";
import Faqs from "../components/faq";
import Schedule from "../components/schedule";
import Sponsers from "../components/sponsers";

import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Head>
        <title>LEC Hacks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <Header func={() => handleClick} id="sec-1" />
      <div className={styles.scrolldown} onClick={handleClick}></div>
      <div ref={ref}></div>
      <OverView ref={ref} />
      <CategoryTile />
      <Faqs />
      <Schedule />
      <Sponsers />
      <Footer />
    </div>
  );
}
