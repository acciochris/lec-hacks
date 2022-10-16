import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CategoryTile from "../components/tiles";
import Header from "../components/header";
import OverView from "../components/overView";

export default function Home() {
  return (
    <div>
      <Header />
      <OverView />
      <CategoryTile />
    </div>
  );
}
