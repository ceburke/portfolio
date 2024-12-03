import { StaticImageData } from "next/image";
import figma from "./figma.png";
import vscode from "./vscode.png";
import bootstrap from "./bootstrap.png";
import adobe from "./adobe.png";
import googlea from "./googlea.png";
import github from "./github.png";

export interface ToolData {
  label: string;
  color: string;
  img: string | StaticImageData;
}

// TODO: replace with actual data
// export tool images to be consistent ~200x200 .pngs
export const toolsData: ToolData[] = [
  {
    label: "Figma",
    color: "#FFD3CE",
    img: figma,
  },
  {
    label: "VSCode",
    color: "#C8E9FF",
    img: vscode,
  },
  {
    label: "Bootstrap",
    color: "#DABDFF",
    img: bootstrap,
  },
  {
    label: "Github",
    color: "#E0E0E0",
    img: github,
  },
  {
    label: "Google Analytics",
    color: "#D6EFDD",
    img: googlea,
  },
  {
    label: "Adobe Creative Suite",
    color: "#F2B8FF",
    img: adobe,
  },
];
