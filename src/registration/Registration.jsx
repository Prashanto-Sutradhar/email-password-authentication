import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";
import { FaEye,FaEyeSlash } from 'react-icons/fa';





const Registration = () => {

    const [errorRegistration,setErrorRegistration]=useState('');
    const [successRegistration,setSuccessRegistration]=useState('');
    const [showPassword,setShowPassWord]=useState();

    const handleRegister=e=>{
        
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        const accepted=e.target.terms.checked;
        if(password.length<6){
         setErrorRegistration('Password should Be At List Six Character');
         return
        }else if(!/[A-Z]/.test(password)){

            setErrorRegistration('Password should Be At List One Upper Letter');
            return

        }else if(!accepted){
            setErrorRegistration('Please Accepted our Terms and Condition ');
            return
        }
        console.log(email,password);
        setErrorRegistration('');
        setSuccessRegistration('');
        // create user
        createUserWithEmailAndPassword(auth ,email,password)
        .then(result=>{
            console.log(result.user);
            setSuccessRegistration('User Registration Successfully')
        })
        .catch(error=>{
            console.error(error);
            setErrorRegistration('This email address already used');
        })
    
    }
    return (
        <div className=" bg-blue-400 mt-10">
            <div className=" mx-auto md:w-1/2">
                <h1 className=" text-3xl mb-8"> Place register</h1>
        <form onSubmit={handleRegister}>
        <input className=" mb-4 w-3/4 py-2 px-4" type="email" 
        name="email" placeholder="Email Address" required></input>
        <br/>
        <input
         className=" mb-4 w-3/4 py-2 px-4"
         type={ showPassword ?"text" :"password"}
         name="password" placeholder="password" required></input>
         <span onClick={()=>setShowPassWord(!showPassword)}>
            {
                showPassword ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
            }
         </span>
         <br/>
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor=""> Yeah I am Accept All the terms and Condition</label>
        <br/>
        <input className=" btn btn-secondary mb-4 w-3/4" type="submit" value=" Register"></input>
        

        </form>
        {

            errorRegistration && <p>{errorRegistration}</p>
        }
        {

            successRegistration && <p>{successRegistration}</p>
        }
        </div>

        </div>
    );
};

export default Registration;