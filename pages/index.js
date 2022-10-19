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
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick4 = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick5 = () => {
    ref5.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <full>
        <nav>
          <div className="icon">
            <Image src="/favicon.png" width={50} height={50} alt="logo" />
          </div>
          <div className="links">
            <div onClick={handleClick}>
              <a>Overview</a>
            </div>
            <div onClick={handleClick2}>
              <a>Tracks</a>
            </div>
            <div onClick={handleClick3}>
              <a>FAQs</a>
            </div>
            <div onClick={handleClick4}>
              <a>Schedule</a>
            </div>
          </div>
        </nav>
      </full>
      <Head>
        <title>LEC Hacks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <Header func={() => handleClick} id="sec-1" />
      <div className={styles.scrolldown} onClick={handleClick}></div>
      <div ref={ref}></div>
      <OverView ref={ref} />
      <div ref={ref2}></div>
      <CategoryTile />
      <div ref={ref3}></div>
      <Faqs />
      <div ref={ref4}></div>
      <Schedule />
      <div ref={ref5}></div>
      <Sponsers />
      <Footer />
    </div>
  );
}
