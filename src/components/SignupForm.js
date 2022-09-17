import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from '../context/AuthContext';
import { collection, setDoc, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../Firebaseconfig";
const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault()

      

      setError('')
      try{
        await createUser(email , password)
        navigate('/homepage')
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    }
    return ( <div>
        <Link  to={"/"}>
            <p className="mt-2 text-center text-sm text-orange-600 mt-5" >
                 Click here to Log in.
            </p>
       
       </Link>
       <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <span class="block w-full text-xl uppercase font-bold mb-4">Signup</span>
                <form 
                onSubmit={handleSubmit}
                class="mb-4" action="/" method="post">
                    <div class="mb-4 md:w-full">
                        <label for="email" class="block text-xs mb-1">Username or Email</label>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email">
                    </input>
                    </div>
                    <div class="mb-6 md:w-full">
                        <label for="password" class="block text-xs mb-1">Password</label>
                        <input 
                         onChange={(e) => setPassword(e.target.value)}
                        class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password">
                        </input>
                 </div>
                    <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Signup</button>
                </form>
               
            </div>
    </div> );
}
 
export default SignupForm;