
import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin,setIsAdmin] = useState(false)
    const [adminLoading,setAdminLoading] = useState(true)
    
    useEffect(() => {
        fetch(`https://doctors-portal-server-sparmankhan.vercel.app/users/admin?email=${email}`)
        .then(res=> res.json())
        .then(data=> {
            setIsAdmin(data)
            setAdminLoading(false)
        })
        
    }, [email])
    return [isAdmin,adminLoading];
}

export default useAdmin;