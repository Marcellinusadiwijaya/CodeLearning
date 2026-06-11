import { codeblock } from "../Data/codeblock";

export default function BlockPalette({ onAddBlock }) {
  return (
    <div className="block-palette">
      <h3>Blocks</h3>

      {codeblock.map((block) => (
        <div
          key={block.id}
          className={`block-item ${block.type}`}
          onClick={() => onAddBlock(block)}
        >
          {block.label}
        </div>
      ))}
    </div>
  );
}
