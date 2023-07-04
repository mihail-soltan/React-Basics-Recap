import { useState } from 'react';
import './Register.css'
export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPass, setRepeatPass] = useState('')

    function submitForm(event) {
        event.preventDefault()
        if (!name.length || !email.length || !password.length || !repeatPass.length) {
            alert("Nu au fost completate toate campurile")
            return
        }
        if (password !== repeatPass) {
            alert("Parolele nu coincid")
            return
        }
        const body = {
            name, email, password
        }
        console.log("form has been submitted")
        console.log(body)
    }

    return (<form onSubmit={submitForm}>
        <label>
            Name:
            <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
        </label>
        <label>
            Email:
            <input type="text" onChange={(event) => setEmail(event.target.value)} value={email} />
        </label>
        <label>
            Password:
            <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
        </label>
        <label>
            Repeat Password:
            <input type="password" onChange={(event) => setRepeatPass(event.target.value)} value={repeatPass} />
        </label>
        <button type='submit'>Submit Form</button>
    </form>)
}