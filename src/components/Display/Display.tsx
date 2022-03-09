interface props {
    // colors: {
    //     mainBackground: string,
    //     keypadBackground: string,
    //     screenBackground: string,

    //     del_reset_background: string,
    //     del_reset_shaddow: string,
    //     equal_toggle_background: string,
    //     equal_toggle_shaddow: string,
    //     keysBackground: string,
    //     keysShaddow: string,

    //     primaryText: string,
    //     secondaryText: string,
    //     contrastOnlyText?: string   
    // },
    color: string
    output: number
  }

export default function Display (props: props) {
    const output = props.output;


    // styles

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',

        width: '100%',
        maxWidth: 480,
        height: 64,
        margin: '2rem 15px 0',
        padding: '5px 1rem 0',

        borderRadius: 10,
        background: props.color,

        fontSize: 32
    }

    return (
        <div style={styles}>
            {output}
        </div>
    );
}