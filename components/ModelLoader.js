import { forwardRef } from "react";
import styles from "../styles/Home.module.css";

export const ModelSpinner = () => <span>loading...</span>;

export const ModelContainer = forwardRef(({ children }, ref) => (
  <div className={styles.modelContainer} ref={ref}>
    {children}
  </div>
));

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};

export default Loader;
