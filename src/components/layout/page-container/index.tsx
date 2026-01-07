import { applyTheme } from "../../../utils/functions/theme";
import { IPageContainerProps } from "./page-container.model";

const PageContainer = ({
  bgColor = applyTheme().bg,
  className = "",
  children,
}: IPageContainerProps) => {
  return (
    <div className={`${bgColor}`}>
      <div
        className={`
            mx-4
            tablet:mx-6
            max-w-300
            desktop:mx-auto
            ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
