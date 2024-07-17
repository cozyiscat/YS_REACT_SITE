import './LoginBox.css';
export function LoginBox(){
    return(
        <div class="login_container">
        <form>
            <h2>Login</h2>
            <input type="text" placeholder="Username"/>
            <br />
            <input type="password" placeholder="Password"/>
            <br />
            <button>Login</button>
            <p>Dont have an account? </p>
            <a href="#">Register</a>
        </form>
    </div>
    )
}