import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/ContextProvider"

const useToken = email =>{
    const {user} = useContext(AuthContext)
    const [token,setToken] = useState('')
    useEffect(()=>{
       if(email){
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=> res.json())
        .then(data => {
            if(data.accessToken){
                localStorage.setItem('accessToken',data.accessToken)
                setToken(data.accessToken)
            }
        })
       }
    },[email])
    return [token,user];
}

export default useToken