export interface ITypographyProps {
  variant: TTypographyVariant;
  markup?: string;
  children: React.ReactNode;
  className?: string;
}

export type TTypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "p5";
