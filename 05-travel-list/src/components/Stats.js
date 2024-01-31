import React from "react";

// Stats Components
function Stats({ items }) {
  // initial conditional redering
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your package list 🚀</em>
      </p>
    );
  }

  // here we derived state
  const numsItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numsItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 🧳 You have ${numsItems} items on you list, and you already packed
          ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
