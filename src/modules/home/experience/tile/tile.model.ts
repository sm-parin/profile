export interface IExperienceTileProps {
  title: string;
  description: string;
  primaryCta?: string;
  onHover?: (isHovered: boolean) => void;
}
