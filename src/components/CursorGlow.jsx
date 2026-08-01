import { useEffect, useState } from "react";

/**
 * A soft radial glow that follows the cursor on desktop pointers,
 * adding subtle depth to the dark theme without being distracting.
 */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed z-[1] h-[420px] w-[420px] rounded-full transition-transform duration-100 ease-out"
      style={{
        left: 0,
        top: 0,
        transform: `translate(${pos.x - 210}px, ${pos.y - 210}px)`,
        background:
          "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
