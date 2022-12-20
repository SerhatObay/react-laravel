import {Link} from "react-router-dom";

export default function Signup(){
    const onSubmit=(ev)=>{
        ev.preventDefault()
    }
    return  (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Ücretsiz Kaydol</h1>
                    <input placeholder="Full Name" type="text"/>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Password" type="password"/>
                    <input placeholder="Password Confirmation" type="password"/>
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already Registered? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
