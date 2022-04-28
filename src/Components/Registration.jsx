import Button from "./UI/Button";
import Input from "./UI/Input";
import '../App.css';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase"

const Registration = ({closeRegistration}) => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setregisterPassword] = useState("")

    const handleRegister = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return ( 
        <div className="registerWrapper flex justify-center items-center absolute h-screen w-screen">
            <form action="" className="formRegisterWrapper flex flex-col bg-slate-200 items-center opacity-100 border rounded">
                <span className="" onClick={()=>closeRegistration(false)}>X</span>
                <Input onChange={(e)=>setRegisterEmail(e.target.value)} placeholder="Email" className="registerInput border rounded shadow-md p-2.5"/>
                <Input placeholder="Confirm Email" className="registerInput border rounded shadow-md p-2.5"/>
                <Input onChange={(e)=>setregisterPassword(e.target.value)} placeholder="Password"className="registerInput border rounded shadow-md p-2.5"/>
                <Input placeholder="Confirm Password"className="registerInput border rounded shadow-md p-2.5"/>
                <Button onClick={handleRegister} className="registerInput w-3/5 border rounded shadow-md bg-sky-500 h-1/4 font-sans subpixel-antialiased font-medium text-slate-50">Register</Button>
            </form>
        </div>
     );
}
 
export default Registration;