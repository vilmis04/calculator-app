// interface ??? {
//     ???: ???;
// }

export default function ThemeSelector (props: any) {
    


    const buttonStyle = {
        width: '1rem',
        height: '1rem',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'red',
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '3.5rem'
    }

    const mainContainerStyle = {
        display: 'flex'
    }

    const themeLabelStyle = {
        alignSelf: 'end',
        marginRight: '2rem'
    }

    return (
        <div style={mainContainerStyle} >
            <div style={themeLabelStyle}>THEME</div>
            <div>
                <div style={containerStyle} >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div style={containerStyle} >
                    <button style={buttonStyle} ></button>
                    <button style={buttonStyle} ></button>
                    <button style={buttonStyle} ></button>
                </div>
            </div>
        </div>
    );
}