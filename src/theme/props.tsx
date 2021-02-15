import React from "react";
import { Theme } from "@material-ui/core";
import { CheckmarkIcon } from "../icons/CheckMarkIcon";

export type ContainerMaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | false;

const propsFactory = (defaultTheme: Theme) => ({
  MuiContainer: {
    maxWidth: false as ContainerMaxWidth
  },
  MuiCheckbox: {
    disableRipple: true,
    checkedIcon: <CheckmarkIcon style={{ fontSize: 17 }} />,
    icon: <></>
  }
});

export default propsFactory;