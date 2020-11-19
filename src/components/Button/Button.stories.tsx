/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Button from "./Button";

export default {
  title: "components|Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked..." },
  },
};

export const button = ({ children, ...rest }: any) => {
  return <Button {...rest}>{children}</Button>;
};

button.story = {
  name: "Default",
};

// export const primaryButton = ({ children, ...rest }: any) => {
//   return <Button {...rest}>{children}</Button>;
// };
