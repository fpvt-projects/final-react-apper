import { useState } from 'react';
import '../App.css';
import squirtle from './Resources/squirtle.gif'
import Button from './UI/Button';
import Input from './UI/Input';
import Registration from './Registration';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false)
    const history = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            alert("Succesfully logged-in")
            const user = userCredential.user;
            console.log("Success")
            history("/home")
            // ...
        })
        .catch((error) => {
            alert("Account not Found")
            const errorCode = error.code;
            const errorMessage = error.message;
  });
    }

    return ( 
        <div className="loginContainer flex h-screen w-screen relative">
            <div className="logoSection h-full w-3/4 relative">
                <div className="logoWrapper"></div>
                <div className="purposeWrapper absolute w-full bottom-0 flex justify-center items-center">
                    <h3 className='creditText font-sans subpixel-antialiased font-medium uppercase'>Purpose @ Apper Project</h3>
                </div>
            </div>
            <div className="formSection flex flex-col items-center h-full w-1/4 shadow-2xl border border-l-slate-300">
                <div className="imgSection h-2/5 w-full flex items-center">
                    <img src={squirtle} alt="pokeball" className='object-contain'/>
                </div>
                <form className="formWrapper flex flex-col w-4/5">
                    <Input className="usernameInput border rounded shadow-md p-2.5 h-1/4" onChange={(e)=>setEmail(e.target.value)}name="username" type="text" placeholder="Username"/>
                    <Input className="passwordInput border rounded shadow-md p-2.5 h-1/4" onChange={(e)=>setPassword(e.target.value)}name="password" type="password" placeholder="Password"/>
                    <Button className="loginBtn border rounded shadow-md bg-sky-500 h-1/4 font-sans subpixel-antialiased font-medium text-slate-50" onClick={handleSignIn}>Login</Button>
                    <div className="registrationSection">
                        <p className='text-right text-xs'>Don't have account? <span className='text-sky-600 hover:text-sky-200 cursor-pointer' onClick={()=>setShowModal(true)}>Create Account</span></p> 
                    </div>
                </form>
            </div>
            {showModal && <Registration closeRegistration={setShowModal} />}
        </div>
     );
}
 
export default Login;