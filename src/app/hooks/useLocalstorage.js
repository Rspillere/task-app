import { useEffect, useState } from "react";
 
export function useLocastorage(key, inicialState){
    const [state, setState] = useState(inicialState)

    useEffect(() => {
        const item = localStorage.getItem(key)
        const tasks = JSON.parse(item)
        if (tasks) setState(tasks)
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}