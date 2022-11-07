import { forwardRef } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import LoadingGif from "../public/loading-gif.gif";
export const ModelSpinner = () => (
  <Image
    style={{
      position: "absolute",
      justifyContent: "center",
      justifyItems: "center",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
    width={50}
    height={50}
    alt="loading"
    src={LoadingGif}
  />
);

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
