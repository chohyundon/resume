import type { LinkMention } from "@/lib/segments";

export function LinkMentionChip({ mention }: { mention: LinkMention }) {
  return (
    <a
      href={mention.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 align-middle text-sm text-neutral-800 underline decoration-neutral-300 underline-offset-2 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mention.iconUrl} alt="" className="size-4 shrink-0 rounded-sm" />
      <span className="truncate">{mention.title}</span>
    </a>
  );
}
