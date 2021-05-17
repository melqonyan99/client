import { useState, useEffect } from "react"

export default function useToken() {
    const [token, setToken] = useState(undefined)
    
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    },[token])

    return ({token})
} 