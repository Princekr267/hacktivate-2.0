"use client";

import { useEffect, useRef, memo } from "react";

const LINES = [
  { type: "cmd",    text: "$ ./hacktivate --mode=chaos --participants=500" },
  { type: "ok",     text: "✓ Loading 6 challenge tracks..." },
  { type: "ok",     text: "✓ Spinning up judge cluster [3/3]" },
  { type: "info",   text: "» Prize pool: ₹2,00,000 locked" },
  { type: "info",   text: "» Mentor pool: 30 experts ready" },
  { type: "warn",   text: "⚠ T-minus 125 days to event" },
  { type: "cmd",    text: "$ deploy arena --location=JIMSEMTC" },
  { type: "ok",     text: "✓ Arena deployed at Greater Noida" },
  { type: "info",   text: "» 24h non-stop power: ON" },
  { type: "info",   text: "» Snack supply chain: READY" },
  { type: "cmd",    text: "$ npm run hack --team=4" },
  { type: "ok",     text: "✓ Team registered successfully" },
  { type: "data",   text: "  Track: AI & ML [OPEN]" },
  { type: "data",   text: "  Track: Web3 [OPEN]" },
  { type: "data",   text: "  Track: Climate Tech [OPEN]" },
  { type: "ok",     text: "✓ Swag kit dispatched 📦" },
  { type: "cmd",    text: "$ sudo make something_amazing" },
  { type: "blink",  text: "█ " },
];

const COLOR: Record<string, string> = {
  cmd:   "#EFD844",
  ok:    "#4ade80",
  info:  "#93c5fd",
  warn:  "#f97316",
  data:  "#c4b5fd",
  blink: "#EFD844",
};

export const TerminalPanel = memo(function TerminalPanel({ className = "" }: { className?: string }) {
  const listRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const id = setInterval(() => {
      el.scrollTop = el.scrollHeight;
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`rounded-2xl border-2 border-gold/30 bg-black/75 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(239,216,68,0.12)] ${className}`}
      style={{ fontFamily: "'Courier New', Courier, monospace" }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gold/20 bg-purple-bg/60">
        <span className="w-3 h-3 rounded-full bg-red-500 border border-red-700" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600" />
        <span className="w-3 h-3 rounded-full bg-green-500 border border-green-700" />
        <span className="ml-3 text-xs text-cream/40 tracking-wider">hacktivate@mission-control:~</span>
      </div>

      {/* Log output */}
      <div
        ref={listRef}
        className="p-4 space-y-1.5 overflow-hidden"
        style={{ height: "220px" }}
      >
        {LINES.map((line, i) => (
          <div
            key={i}
            className="text-xs leading-relaxed"
            style={{
              color: COLOR[line.type],
              animation: `fade-up 0.4s ${i * 0.12}s both`,
            }}
          >
            {line.type === "blink" ? (
              <span style={{ animation: "border-pulse 0.8s ease-in-out infinite" }}>{line.text}</span>
            ) : (
              line.text
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

// Small floating status badge
export const StatusBadge = memo(function StatusBadge({
  label, value, color = "#4ade80"
}: { label: string; value: string; color?: string }) {
  return (
    <div
      className="rounded-xl border border-gold/25 bg-black/70 backdrop-blur-sm px-4 py-3 flex items-center gap-3"
      style={{ fontFamily: "'Courier New', Courier, monospace" }}
    >
      <span className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }}>
        <span className="sr-only">status</span>
      </span>
      <div className="flex flex-col">
        <span className="text-[10px] text-cream/40 uppercase tracking-widest">{label}</span>
        <span className="text-xs font-bold" style={{ color }}>{value}</span>
      </div>
    </div>
  );
});
