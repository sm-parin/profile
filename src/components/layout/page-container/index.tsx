import { IPageContainerProps } from "./page-container.model";
import styles from "./page-container.module.scss";

const PageContainer = ({
  bgColor,
  className,
  children,
}: IPageContainerProps) => {
  return (
    <div className={`${bgColor}`}>
      <div className={`${styles["page-container"]} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
