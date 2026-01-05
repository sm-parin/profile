import { IPageContainerProps } from "./page-container.model";

const PageContainer = ({
  bgColor,
  className,
  children,
}: IPageContainerProps) => {
  return (
    <div className={`${bgColor}`}>
      <div
        className={`
            grid grid-cols-12 gap-x-4 mx-4
            tablet:gap-x-6 tablet:mx-6
            desktop:gap-x-8 desktop:mx-10
            ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
