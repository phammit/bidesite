import React, { FC } from "react";
import { SvgIcon, makeStyles, createStyles } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import classNames from "classnames";

const useStyles = makeStyles(
  createStyles({
    root: {
      fontSize: 15
    }
  })
);

export const CheckmarkIcon: FC<SvgIconProps> = props => {
  const classes = useStyles();

  return (
    <SvgIcon
      viewBox="0 0 19 15"
      className={classNames(classes.root, props.className)}
      {...props}
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Grommet/Checkmark/Black"
          transform="translate(0.000000, -1.000000)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <g id="checkmark-(2)" transform="translate(0.000000, 1.000000)">
            <path
              d="M18.8251196,0.120714734 C18.6171232,-0.059294126 18.302104,-0.0352855231 18.120121,0.17470626 L6.47120475,13.7640579 L0.853258719,8.14634168 C0.65825042,7.95134136 0.341264523,7.95134136 0.146256224,8.14634168 C-0.0487520747,8.34134201 -0.0487520747,8.65831494 0.146256224,8.85331526 L6.14620329,14.8530169 C6.24020063,14.9460085 6.3681899,14.9989981 6.50018695,14.9989981 C6.50619863,14.9989981 6.51317514,14.9989981 6.52018875,15 C6.65919943,14.9939886 6.79019454,14.9300151 6.88018409,14.8250007 L18.8801153,0.825684499 C19.0591296,0.615692716 19.03512,0.300686487 18.8251196,0.120714734 Z"
              id="Path"
            ></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

export default CheckmarkIcon;