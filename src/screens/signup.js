import React,{useState ,useContext} from "react";
import { GlobalContext } from "../context/context";

export default function Signup() {
    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[role,setRole] = useState('')
    // const [newUser,setNewUser] = useState('')

    const { state, dispatch } = useContext(GlobalContext);

    const addUser = (a) => {
        console.log("newuser", a);
        dispatch({ type: "SIGNUP_USER", payload: a });
      };
    
    return(
        <div>
            <label>Username : <input type="text" value={username} onChange={(a)=>{setUsername(a.target.value)}}/></label>
            <label>Email : <input type="email" value={email} onChange={(a)=>{setEmail(a.target.value)}}/></label>
            <label>Password : <input type="password" value={password} onChange={(a)=>{setPassword(a.target.value)}}/></label>
            <label>Role : </label>
            <label><input type="radio" value="Teacher" onChange={(a)=>{setRole(a.target.value)}}/>Teacher </label>
            <label><input type="radio" value="Student" onChange={(a)=>{setRole(a.target.value)}}/>Student </label>
            <br/>
            <button onClick={()=>{
                let newUserObj = {
                    username,email,password,role
                }
                // setNewUser(newUserObj)
                addUser(newUserObj)
            }}>Submit</button>
        </div>
    )
}
