"use client";

import { useState } from "react";

export function Counter({ user }) {
  const [count, setCount] = useState(0);
  console.log(user);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
