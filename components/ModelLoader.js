/* eslint-disable react/display-name */
import { forwardRef } from "react";

export const ModelSpinner = () => <span>loading...</span>;

export const ModelContainer = forwardRef(({ children }, ref) => (
  <div
    style={{
      width: "640px",
      height: "640px",
      overflow: "hidden",
    }}
    ref={ref}
  >
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
