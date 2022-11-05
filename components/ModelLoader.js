/* eslint-disable react/display-name */
import { forwardRef } from "react";

export const ModelSpinner = () => <span>loading...</span>;

export const ModelContainer = forwardRef(({ children }, ref) => (
  <div ref={ref} className="modelContainer">
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
