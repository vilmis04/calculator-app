import { selectorContainer, themeLabelStyle, mainContainerStyle, containerStyle, buttonStyle } from './ThemeSelectorStyles';

export default function ThemeSelector (props: any) {
    
    const buttonContainer = {
        ...containerStyle,
        backgroundColor: props.colors.keypadBackground,
        borderRadius: '0.5rem'
    }

    const selected = props.colors.equal_toggle_background;
    const unselected = props.colors.keypadBackground;

    const buttonStyle1 = {
        ...buttonStyle,
        backgroundColor: props.theme === '1' ? selected : unselected
    }
    const buttonStyle2 = {
        ...buttonStyle,
        backgroundColor: props.theme === '2' ? selected : unselected
    }
    const buttonStyle3 = {
        ...buttonStyle,
        backgroundColor: props.theme === '3' ? selected : unselected
    }

    return (
        <div style={mainContainerStyle} >
            <div style={themeLabelStyle}>THEME</div>
            <div style={selectorContainer} >
                <div style={containerStyle} >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div style={buttonContainer} >
                    <button id='theme1' data-theme={1} style={buttonStyle1} onClick={(event) => props.changeTheme(event.target)}></button>
                    <button id='theme2' data-theme={2} style={buttonStyle2} onClick={(event) => props.changeTheme(event.target)}></button>
                    <button id='theme3' data-theme={3} style={buttonStyle3} onClick={(event) => props.changeTheme(event.target)}></button>
                </div>
            </div>
        </div>
    );
}