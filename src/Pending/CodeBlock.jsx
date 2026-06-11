import { useState } from "react";
import BlockPalette from "../components/BlockPalette";
import BlockWorkspace from "../components/BlockWorkspace";
import "./CodeBlock.css";

export default function CodeBlock() {
  const [workspaceBlocks, setWorkspaceBlocks] = useState([]);
  const [position, setPosition] = useState(0);

  const addBlock = (block) => {
    setWorkspaceBlocks((prev) => [...prev, block]);
  };

  const removeBlock = (index) => {
    setWorkspaceBlocks((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };
  const updateBlock = (index, newBlock) => {
    setWorkspaceBlocks((prev) =>
      prev.map((b, i) => (i === index ? newBlock : b))
    );
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const runProgram = async () => {
    setPosition(0);

    let started = false;

    for (const block of workspaceBlocks) {
      // Harus dimulai dari When Run Clicked
      if (block.action === "start") {
        started = true;
        continue;
      }

      if (!started) continue;

      if (block.action === "move") {
        await delay(300);
        setPosition((prev) => prev + block.value);
      }

      if (block.action === "turn") {
        console.log("Turn", block.value);
      }

      if (block.action === "if") {
        if (block.condition === true) {
          await delay(300);
          setPosition((prev) => prev + 10);
        }
      }
    }
  };


  return (
    <div className="code-block-page">
      <h1>🧩 Code Block</h1>
      <p>Susun blok untuk menjalankan program.</p>

      <div className="block-layout">
        <BlockPalette onAddBlock={addBlock} />

        <BlockWorkspace
          blocks={workspaceBlocks}
          onRemoveBlock={removeBlock}
          onUpdateBlock={updateBlock}
        />


        <div className="visual-area">
          <div
            className="character"
            style={{ transform: `translateX(${position}px)` }}
          >
            🤖
          </div>

          <button className="run-btn" onClick={runProgram}>
            ▶ Run
          </button>
        </div>
      </div>
    </div>
  );
}
