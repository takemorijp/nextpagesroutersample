"use client"; // Required for client-side navigation
import { useRouter } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  const goToAbout = () => {
    router.push("/about");
  };

  const goToAbout2 = () => {
    router.push("/about2");
  };

  const goToAboutAny = (page: any) => {
    router.push(`/about${page}`);
  };

  const goToAny = (page: string) => {
    router.push(`${page}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Home Page
      </h1>
      <div style={{ marginTop: 50 }}>
        <button onClick={goToAbout}>Go to About Page by takemori.</button>
      </div>
      <div style={{ marginTop: 20 }}>
        <a
          onClick={goToAbout2}
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          あばうとページ2へ
        </a>
      </div>
      <div style={{ marginTop: 50 }}>
        <button onClick={() => goToAboutAny(3)}>about3</button>
      </div>
      <div style={{ marginTop: 50 }}>
        <button onClick={() => goToAny("about3")}>about3 (param)</button>
      </div>
      <div style={{ marginTop: 50 }}>
        <button onClick={() => router.push("about3")}>about3 (直接ボタン版)</button>
      </div>
      <div style={{ marginTop: 50 }}>
        <a onClick={() => router.push("about3")}>about3 (直接リンク版)</a>
      </div>
      <div style={{ marginTop: 50 }}>
        <a onClick={() => router.push("index_org")}>index_org</a>
      </div>
      <div style={{ marginTop: 50 }}>
        <Link href={"/about"}>Linkのabout</Link>
      </div>
      <div style={{ marginTop: 50 }}>
        <Link href={"/first"}>Linkのfirst</Link>
      </div>
    </div>
  );
}
