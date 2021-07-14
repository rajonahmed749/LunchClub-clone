import React from 'react';
import logo from "../../../images/logo.svg";
import loginPhoto from "../../../images/login-photo.svg";
import signUp from "../../../images/signWithGoogle.PNG";

const Login = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <img src={logo} alt="logo"/>
            </div>            
            <h1 className="text-center mt-3">Log in</h1>
            <div className="row justify-content-center text-center mt-4">
                <div className="col-md-5">
                    <img className="mb-4" src={loginPhoto} alt="logoPhoto"/> <br/>
                    <img onClick={() => alert("clicked")} src={signUp}alt="signupPhoto"/>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="E-mail" size="sm"/>
                        </div>                 
                        <button type="button" className="btn btn-primary">Send me a Login link</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;