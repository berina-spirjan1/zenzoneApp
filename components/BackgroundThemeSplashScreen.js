import * as React from "react"
import Svg, {Ellipse, G, Path} from "react-native-svg"


function BackgroundThemeSplashScreen(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={1800}
            height={1600}
            viewBox="300 -900 1000 1600"
            {...props}
        >
            <G data-name="Group 85" transform="translate(355 -154.274)">
                <Ellipse
                    cx={264.75}
                    cy={82}
                    fill="#6391d6"
                    data-name="Ellipse 6"
                    rx={264.75}
                    ry={82}
                    transform="translate(-22.5 314)"
                />
                <Path
                    fill="#6391d6"
                    d="M112 237.39c-221.136 44.338 395 53.862 395 120.3s-176.848 120.3-395 120.3-395-53.853-395-120.3 616.136-164.638 395-120.3z"
                    data-name="Path 737"
                />
                <Path
                    fill="#3e65a1"
                    d="M19.208 427.15c144.603-25.55 553.042-117.684 567.31-36.933s-91.39 166.927-235.99 192.476-273.393-19.201-287.66-99.952-188.262-30.042-43.66-55.591z"
                    data-name="Path 742"
                />
            </G>
        </Svg>
    )
}

export default BackgroundThemeSplashScreen
