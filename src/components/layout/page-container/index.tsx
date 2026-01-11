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
            desktop:mx-10
            max-w-400
            content:mx-auto
            ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
