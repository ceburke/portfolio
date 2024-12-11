"use client";
import { useState } from "react";
import { MAX_CONTENT_WIDTH } from "@/constants";

export default function HeroText() {
  const [hovered, setHovered] = useState(false);

  return (
    <p
      className="group text-4xl mt-24 mb-20 px-8 md:px-20 lg:px-36"
      style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}
      onMouseEnter={() => setHovered(true)}
    >
      {/* TODO Hmm yum a fun little easter egg surprise&delight 𓆇𓎥𖡼•ﻌ• */}
      I‘m a{" "}
      <span
        className="font-bold transition-all ease-in-out duration-500"
        style={hovered ? { color: "#8CC59C" } : undefined}
      >
        designer who codes
      </span>
      , driven by a passion for{" "}
      <span
        className="font-bold transition-all ease-in-out duration-500"
        style={hovered ? { color: "#8794CF" } : undefined}
      >
        accessibility
      </span>{" "}
      and creating products that make a{" "}
      <span
        className="font-bold transition-all ease-in-out duration-500"
        style={hovered ? { color: "#F1975A" } : undefined}
      >
        positive social impact.
      </span>
    </p>
  );
}
