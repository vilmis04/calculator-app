interface props {
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
        backgroundColor: props.color,

        fontSize: 32
    }

    return (
        <div id='display' style={styles}>
            {output}
        </div>
    );
}