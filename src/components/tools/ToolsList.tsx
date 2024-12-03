import ToolsListItem from './ToolsListItem';
import {ToolData} from './toolsData';

export default function ToolsList({toolsData}: {toolsData: ToolData[]}): React.ReactNode {
  return (
    <ul className="flex flex-wrap gap-8">
      {toolsData.map((toolData) => (
        <li key={toolData.label}>
          <ToolsListItem toolData={toolData} />
        </li>
      ))}
    </ul>
  );
}
