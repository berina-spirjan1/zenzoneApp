import * as React from "react"
import Svg, {
    Defs,
    RadialGradient,
    Stop,
    G,
    Ellipse,
    Rect,
} from "react-native-svg"

function BackgroundLightModeForProfile(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={1417.927}
            height={1416.471}
            viewBox="0 0 1417.927 1416.471"
            {...props}
        >
            <Defs>
                <RadialGradient
                    id="prefix__c"
                    cx={0.5}
                    cy={0.5}
                    r={0.5}
                    gradientUnits="objectBoundingBox"
                >
                    <Stop offset={0} />
                    <Stop offset={1} />
                </RadialGradient>
            </Defs>
            <G data-name="Group 9" transform="translate(390.964 646.235)">
                <Ellipse
                    cx={365.5}
                    cy={290}
                    fill="#6391d6"
                    data-name="Ellipse 6"
                    rx={365.5}
                    ry={290}
                    transform="translate(11 -102)"
                />
                <Ellipse
                    cx={395.14}
                    cy={404.979}
                    fill="#3e65a1"
                    data-name="Ellipse 3"
                    rx={395.14}
                    ry={404.979}
                    transform="rotate(-48.01 -28.674 320.144)"
                />
                <Ellipse
                    cx={395}
                    cy={257}
                    fill="#6391d6"
                    data-name="Ellipse 4"
                    rx={395}
                    ry={257}
                    transform="translate(-283 -36)"
                />
                <Ellipse
                    cx={395.14}
                    cy={404.979}
                    fill="#3e65a1"
                    data-name="Ellipse 5"
                    opacity={0.26}
                    rx={395.14}
                    ry={404.979}
                    transform="rotate(-48.01 -99.215 478.49)"
                />
                <G data-type="innerShadowGroup">
                    <G filter="url(#prefix__a)" transform="translate(-390.96 -646.24)">
                        <G
                            fill="#fff"
                            stroke="#707070"
                            data-name="Ellipse 2"
                            transform="translate(311.96 479.24)"
                        >
                            <Ellipse cx={293} cy={298} rx={293} ry={298} stroke="none" />
                            <Ellipse cx={293} cy={298} fill="none" rx={292.5} ry={297.5} />
                        </G>
                    </G>
                    <Ellipse
                        cx={293}
                        cy={298}
                        fill="#fff"
                        data-name="Ellipse 2"
                        rx={293}
                        ry={298}
                        transform="translate(-79 -167)"
                    />
                    <G filter="url(#prefix__b)" transform="translate(-390.96 -646.24)">
                        <Ellipse
                            cx={293}
                            cy={298}
                            fill="#fff"
                            data-name="Ellipse 2"
                            rx={293}
                            ry={298}
                            transform="translate(311.96 479.24)"
                        />
                    </G>
                    <G
                        fill="none"
                        stroke="#707070"
                        data-name="Ellipse 2"
                        transform="translate(-79 -167)"
                    >
                        <Ellipse cx={293} cy={298} rx={293} ry={298} stroke="none" />
                        <Ellipse cx={293} cy={298} rx={292.5} ry={297.5} />
                    </G>
                </G>
                <G
                    fill="url(#prefix__c)"
                    stroke="#707070"
                    data-name="Rectangle 25"
                    opacity={0.57}
                    transform="translate(64 81)"
                >
                    <Rect width={300} height={300} rx={137} stroke="none" />
                    <Rect
                        width={299}
                        height={299}
                        x={0.5}
                        y={0.5}
                        fill="none"
                        rx={136.5}
                    />
                </G>
            </G>
        </Svg>
    )
}

export default BackgroundLightModeForProfile
