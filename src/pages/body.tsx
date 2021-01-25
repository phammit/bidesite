import React, { FC } from "react";

export interface BodyProps { }

const Body: FC<BodyProps> = props => {
    return (
        <main
            style={{
                flex: 1,
                position: "relative"
            }}
        >
            {props.children}
        </main>
    );
};

Body.defaultProps = {};

export default Body;
