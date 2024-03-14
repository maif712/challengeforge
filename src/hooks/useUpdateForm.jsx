import { useState } from "react"


export default function useUpdateForm() {

    const [isUpdateForm, setIsUpdateForm] = useState(false)

    const handleSetIsUpdateForm = () => {
        setIsUpdateForm(prev => !prev)
    }

    const handleCloseUpdateForm = (e) =>  {
        e.preventDefault()
        setIsUpdateForm(false)
    }


    return {
        isUpdateForm, handleSetIsUpdateForm, handleCloseUpdateForm
    }
}