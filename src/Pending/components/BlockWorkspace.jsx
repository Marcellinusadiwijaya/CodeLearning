export default function BlockWorkspace({ blocks, onRemoveBlock, onUpdateBlock }) {
  return (
    <div className="workspace">
      <h3>Your Code</h3>

      {blocks.length === 0 && (
        <p style={{ opacity: 0.5 }}>Klik blok untuk menambahkan</p>
      )}

      {blocks.map((block, index) => (
        <div
          key={index}
          className={`workspace-block ${block.type}`}
          onClick={() => onRemoveBlock(index)}
        >
          {block.label}

          {block.type === "logic" && (
            <input
              className="condition-input"
              placeholder="true / false"
              onClick={(e) => e.stopPropagation()}
              onChange={(e) =>
                onUpdateBlock(index, {
                  ...block,
                  condition: e.target.value === "true",
                })
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}
