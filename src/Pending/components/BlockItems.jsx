function BlockItems({ label, onClick }) {
  return (
    <div className="block-item" onClick={onClick}>
      {label}
    </div>
  );
}

export default BlockItems;
