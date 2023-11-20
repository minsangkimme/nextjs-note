import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Counter from "@/components/counter";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>홈페이지다!!ver4</h1>
      <Counter />
    </>
  );
}
