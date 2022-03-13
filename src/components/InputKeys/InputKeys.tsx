import Buttons from '../Buttons/Buttons';

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
    theme: string,
    handleClick: (target: any) => void
  }

export default function InputKeys (props: props) {


    // styles

    const containerStyle = {
        width: '100%',
        maxWidth: 480,
        margin: '2rem 15px 0',
        padding: '2rem',

        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',

        borderRadius: 10,
        backgroundColor: props.colors.keypadBackground
    }

    return (
        <div style={containerStyle}>
            <Buttons colors={props.colors} theme={props.theme} handleClick={props.handleClick} />
        </div>
    );
}