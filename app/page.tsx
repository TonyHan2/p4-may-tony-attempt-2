"use client";

import { useState } from "react";
import { Image } from "@heroui/image";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Why&nbsp;</span>
        <span className={title({ color: "violet" })}>Gabrial&nbsp;</span>
        <br />
        <span className={title()}>Was Right</span>
        <div className={subtitle({ class: "mt-4" })}>
          A Justification of Gabrial&apos;s character
        </div>
      </div>

      <div className="flex gap-3">
        <Image
          alt="img1"
          src="https://i1.sndcdn.com/artworks-qYkiwZoEnE6xYcHZ-fTyHVQ-t500x500.jpg"
          width={350}
        />
      </div>
    </section>
  );
}
