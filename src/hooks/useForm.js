import { useRef } from "react"

const useForm = (data = {}) => {
    const myRef = useRef()

    const submit = e => {
        e.preventDefault()      
    }

    return [data, myRef, submit]
}

export default useForm