import {StaticImageData} from 'next/image';
import figma from './figma.png';

export interface ToolData {
  label: string;
  color: string;
  img: string | StaticImageData;
}

// TODO: replace with actual data
// export tool images to be consistent ~200x200 .pngs
export const toolsData: ToolData[] = [
  {
    label: 'Figma',
    color: '#FFD3CE',
    img: figma,
  },
  {
    label: 'VSCode',
    color: '#C8E9FF',
    img: figma,
  },
  {
    label: 'Bootstrap',
    color: '#DABDFF',
    img: figma,
  },
  {
    label: 'Github',
    color: '#E0E0E0',
    img: figma,
  },
  {
    label: 'Google Analytics',
    color: '#D6EFDD',
    img: figma,
  },
  {
    label: 'Adobe Creative Suite',
    color: '#F2B8FF',
    img: figma,
  },
];
