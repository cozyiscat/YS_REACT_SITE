export const Login = () => {
    // const bodyStyle = {
    //     width: '100%',
    //     height: '100px',
    //     backgroundColor: 'gray'
    // }
    const divStyle = {
        width: '500px',
        height: '350px',
        border: '1px solid #ccc',
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: ''
    }
    const h1Style = {
        textAlign: 'center'
    }
    const inputStyle = {
        width: '400px',
        height: '40px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '15px',
        marginTop: '20px'
    }
    const btnStyle = {
        display: 'block',
        margin: '0 auto',
        width: '350px',
        height: '40px',
        border: 'none',
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '8px',
        marginTop: '20px'
    }
    const pStyle = {
        display: 'inline-block',
        color: '#333'
    }
    const aStyle= {
        marginLeft: '5px',
        fontWeight: 'bold'
    }
    return (
        // <div style={bodyStyle}>
            <div style={divStyle}>
            <h1 style={h1Style}>Login</h1>
            <input type="text" placeholder="Username" style={inputStyle}/>
            <input type="password" placeholder="Password" style={inputStyle}/>
            <button style={btnStyle}>Login</button>
            <p style={pStyle}>Dont have an account? </p>
            <a href="#" style={aStyle}>Register</a>
            </div>
        // </div>
    )
}