import { TTheme } from "../../../utils/functions/theme";

export interface IButtonProps {
  theme?: TTheme;
  secondary?: boolean;
  isText?: boolean;
  label?: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
  iconPosition?: "start" | "end";
}
