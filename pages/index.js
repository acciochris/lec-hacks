import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CategoryTile from "../components/tiles";
import header from "../components/header";

export default function Home() {
  return (
    <div>
      <header />
      <CategoryTile />
    </div>
  );
}
