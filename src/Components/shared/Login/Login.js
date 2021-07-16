import React from 'react';
import logo from "../../../images/logo.svg";
import loginPhoto from "../../../images/login-photo.svg";
import signUp from "../../../images/signWithGoogle.PNG";
import { useHistory } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL }
                setLoggedInUser(signedInUser)
                 history.push('/weekly');
            }).catch((error) => {                
                const errorMessage = error.message;                
                alert(errorMessage);
            });
    }
    return (
        <section>
            <div className="text-center mt-5">
                <img src={logo} alt="logo" />
            </div>
            <h1 className="text-center mt-3">Log in</h1>
            <div className="row justify-content-center text-center mt-4">
                <div className="col-md-5">
                    <img className="mb-4" src={loginPhoto} alt="logoPhoto" /> <br />
                    <img onClick={handleGoogle} src={signUp} alt="signupPhoto" className="G-login" />
                    <form>
                        <div className="mb-2">
                            <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" placeholder="E-mail" />
                        </div>
                        <button type="button" className="btn btn-primary">Send me a Login link</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;