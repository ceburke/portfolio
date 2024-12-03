import Image from 'next/image';
import {ToolData} from './toolsData';

export default function ToolsListItem({
  toolData: {img, label, color},
}: {
  toolData: ToolData;
}): React.ReactNode {
  return (
    <div className={`flex items-center gap-2`}>
      <div
        className="flex flex-none items-center justify-center h-16 w-16"
        style={{backgroundColor: color}}
      >
        <Image src={img} alt={label} className="h-1/2 w-1/2" />
      </div>
      <p className="overflow-ellipsis">{label}</p>
    </div>
  );
}
