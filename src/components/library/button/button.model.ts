export interface IButtonProps {
  theme?: boolean | null;
  secondary?: boolean;
  isText?: boolean;
  label?: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
  iconPosition?: "start" | "end";
}
