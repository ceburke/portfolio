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
    label: 'Figma1',
    color: '#FFD3CE',
    img: figma,
  },
  {
    label: 'Figma2',
    color: '#FFD3CE',
    img: figma,
  },
  {
    label: 'Figma3',
    color: '#FFD3CE',
    img: figma,
  },
  {
    label: 'Figma4',
    color: '#FFD3CE',
    img: figma,
  },
  {
    label: 'Figma5',
    color: '#FFD3CE',
    img: figma,
  },
];
