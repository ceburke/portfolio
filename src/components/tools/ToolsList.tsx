import ToolsListItem from "./ToolsListItem";
import { ToolData } from "./toolsData";

export default function ToolsList({ toolsData }: { toolsData: ToolData[] }): React.ReactNode {
  return (
    <ul
      className="grid gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(auto, 180px))" }}
    >
      {toolsData.map((toolData) => (
        <li key={toolData.label}>
          <ToolsListItem toolData={toolData} />
        </li>
      ))}
    </ul>
  );
}
