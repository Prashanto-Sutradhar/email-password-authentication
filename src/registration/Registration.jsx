import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";




const Registration = () => {

    const [errorRegistration,setErrorRegistration]=useState('');
    const [successRegistration,setSuccessRegistration]=useState('');

    const handleRegister=e=>{
        
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        if(password.length<6){
         setErrorRegistration('Password should Be At List Six Character');
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
            setErrorRegistration(error.message);
        })
    
    }
    return (
        <div className=" bg-blue-400 mt-10">
            <div className=" mx-auto md:w-1/2">
                <h1 className=" text-3xl mb-8"> Place register</h1>
        <form onSubmit={handleRegister}>
        <input className=" mb-4 w-3/4 py-2 px-4" type="email" name="email" placeholder="Email Address" required></input>
        <br/>
        <input className=" mb-4 w-3/4 py-2 px-4" type="password" name="password" placeholder="password" required></input>
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