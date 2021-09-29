import React,{useState ,useContext} from "react";
import { GlobalContext } from "../context/context";



export default function Login() {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    // const [newUser,setNewUser] = useState('')

    const { state, dispatch } = useContext(GlobalContext);

    const checkUser = () => {
        console.log("Data", state);
      };
    
    return(
        <div>
            <label>Email : <input type="email" value={email} onChange={(a)=>{setEmail(a.target.value)}}/></label>
            <label>Password : <input type="password" value={password} onChange={(a)=>{setPassword(a.target.value)}}/></label>
            <br/>
            <button onClick={()=>{
                let user = {email,password}
                console.log(user)
                checkUser()
            }}>Submit</button>
        </div>
    )
}