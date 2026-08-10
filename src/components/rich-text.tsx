import type { Rich } from "@/lib/segments";

export function RichText({ segments }: { segments: Rich }) {
  return (
    <>
      {segments.map((seg, i) => {
        let node: React.ReactNode = seg.text;

        if (seg.code) {
          node = (
            <code className="rounded-[3px] bg-[rgba(135,131,120,0.15)] px-[0.3em] py-[0.1em] font-mono text-[0.85em] text-[#eb5757] dark:bg-neutral-800 dark:text-[#ff8a8a]">
              {seg.text}
            </code>
          );
        }

        if (seg.highlight) {
          node = (
            <span className="text-[#d9730d] dark:text-[#e8a55c]">{node}</span>
          );
        }

        if (seg.href) {
          node = (
            <a
              href={seg.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-400 underline-offset-2 hover:bg-[rgba(35,131,226,0.1)]">
              {node}
            </a>
          );
        }

        if (seg.bold) {
          node = <strong className="font-bold">{node}</strong>;
        }

        return <span key={i}>{node}</span>;
      })}
    </>
  );
}
