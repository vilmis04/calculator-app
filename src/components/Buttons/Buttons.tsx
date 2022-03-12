interface props {
    colors: {
        mainBackground: string,
        keypadBackground: string,
        screenBackground: string,

        del_reset_background: string,
        del_reset_shaddow: string,
        equal_toggle_background: string,
        equal_toggle_shaddow: string,
        keysBackground: string,
        keysShaddow: string,

        primaryText: string,
        secondaryText: string,
        contrastOnlyText?: string   
    },
    theme: string
  }


export default function Buttons (props: props) {
  

    const inputButtons = [
        '7', '8', '9', 'DEL', 
        '4', '5', '6', '+', 
        '1', '2', '3', '-', 
        '.', '0', '/', 'x', 
        'RESET', '='
    ];

        const keyIDs = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '0': 'zero',
        '+': 'add',
        '-': 'subtract',
        '/': 'divide',
        'x': 'multiply',
        '.': 'decimal',
        '=': 'equals',
        'DEL': 'delete',
        'RESET': 'clear'
    }


    const buttons = inputButtons.map(key => {
        const contrastText = props.colors.contrastOnlyText ? props.colors.contrastOnlyText : '';
        const primaryText = props.colors.primaryText;
        const secondaryText = props.colors.secondaryText;
        const theme = props.theme;

        // const id = keyIDs['x'];

        let inputStyle = {
            padding: '5px 0 0',
            height: 55,
            fontSize: 32,

            gridColumn: 'span 1',
            backgroundColor: props.colors.keysBackground,
            boxShadow: '0 5px '+props.colors.keysShaddow,
            color: theme === '1' ? primaryText : secondaryText,

            border: 'none',
            borderRadius: 5
        }

        switch (key) {
            case 'DEL':
                inputStyle.fontSize = 16;
                inputStyle.backgroundColor = props.colors.del_reset_background;
                inputStyle.boxShadow = '0 5px '+props.colors.del_reset_shaddow;
                inputStyle.color = theme === '1' ? secondaryText : 
                    theme === '3' ? contrastText : primaryText;
                break;
            case 'RESET':
                inputStyle.fontSize = 16;
                inputStyle.backgroundColor = props.colors.del_reset_background;
                inputStyle.boxShadow = '0 5px '+props.colors.del_reset_shaddow;
                inputStyle.gridColumn = 'span 2';
                inputStyle.color = theme === '1' ? secondaryText : 
                    theme === '3' ? contrastText : primaryText;
                break;
            case '=':
                inputStyle.fontSize = 16;
                inputStyle.backgroundColor = props.colors.equal_toggle_background;
                inputStyle.boxShadow = '0 5px '+props.colors.equal_toggle_shaddow;
                inputStyle.gridColumn = 'span 2';
                inputStyle.color = theme === '1' ? secondaryText : primaryText;
                break;
        }
            return (
                <button key={key} data-number={key} style={inputStyle}>
                {/* <button id={keyIDs[key]} key={key} data-number={key} style={inputStyle}> */}
                    {key}
                </button>
            );
        }   
    );

    return (
        <>
            {buttons}
        </>
    );
}
