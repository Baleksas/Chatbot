"use client";

import React, { ReactNode, useState } from "react";
import { Provider } from "./context";

const AppWrapper = ({ children }: any) => {
  return <Provider>{children}</Provider>;
};

export default AppWrapper;
