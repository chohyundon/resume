export type Segment = {
  text: string;
  bold?: boolean;
  code?: boolean;
  highlight?: boolean;
  href?: string;
  italic?: boolean;
};

export type Rich = Segment[];

export const t = (text: string): Segment => ({ text });
export const b = (text: string): Segment => ({ text, bold: true });
export const hl = (text: string): Segment => ({
  text,
  bold: true,
  highlight: true,
});
export const code = (text: string): Segment => ({ text, code: true });
export const link = (text: string, href: string, bold = false): Segment => ({
  text,
  href,
  bold,
});

export type LinkMention = {
  label: string;
  href: string;
  title: string;
  iconUrl: string;
};
