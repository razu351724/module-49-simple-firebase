import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.inti";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        // console.log('google mama is comming')
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                console.log(loggedInUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loginInUser = result.user;
            console.log(loginInUser);
            setUser(loginInUser)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {/* user ? logout : sign in */}

            {user ?
                <button onClick={handleSignOut}>Sign out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>google loging</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </>
            }
            {user && < div>
                <h3>User: {user?.displayName}</h3>
                <p>Email: {user?.email}</p>
                <img src={user?.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;