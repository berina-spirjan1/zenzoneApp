import * as React from "react";
import Svg, { G, Rect } from "react-native-svg";

function BackgroundForLoginLocation(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={475}
            height={678}
            viewBox="20 0 560 800"
            {...props}
        >
            <G
                fill="#1c1f23"
                stroke="#707070"
                data-name="Rectangle 1"
                transform="translate(15 15)"
            >
                <Rect width={445} height={648} rx={60} stroke="none" />
                <Rect width={444} height={647} x={0.5} y={0.5} fill="none" rx={59.5} />
            </G>
        </Svg>
    )
}

export default BackgroundForLoginLocation;
