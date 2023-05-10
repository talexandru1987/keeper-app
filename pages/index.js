import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Note } from "./components/Note";

export default function Home() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
