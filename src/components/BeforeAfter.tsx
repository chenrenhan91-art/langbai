"use client";

import { useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  function move(clientX: number) {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    const next = ((clientX - box.left) / box.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden bg-blush select-none"
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons) move(e.clientX);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before} alt={beforeLabel} className="h-full w-full object-cover" />
      </div>
      <div
        className="absolute inset-y-0 w-0.5 bg-blush"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center bg-rose text-xs text-blush">
          ||
        </div>
      </div>
      <span className="absolute left-3 top-3 bg-blush/90 px-2 py-1 text-xs uppercase tracking-wider">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 bg-blush/90 px-2 py-1 text-xs uppercase tracking-wider">
        {afterLabel}
      </span>
    </div>
  );
}
