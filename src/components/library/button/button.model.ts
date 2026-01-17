export interface IButtonProps {
  theme?: boolean | null;
  secondary?: boolean;
  isText?: boolean;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  iconPosition?: "start" | "end";
}
