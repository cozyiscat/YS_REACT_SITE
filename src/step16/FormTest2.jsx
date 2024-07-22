import { useState } from "react"
export function FormTest2() {
    const [value, setValue] = useState('');
    const handleChange =(event) => {
        setValue(event.target.value)
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        alert(value);
    }
    return(
        <form action="" onSubmit={handleSubmit}>
        <label>요청사항: </label>
        <textarea id="name" value={value} onChange={handleChange}></textarea>
        <button type="submit">제출</button>
        </form>
    )
}