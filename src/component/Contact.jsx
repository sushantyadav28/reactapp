import React, {useState} from 'react'
function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (data) => {
        event.preventDefault()
        if(!email.endsWith("krmu.edu.in")){
            alert("Please enter a valid email address ending with krmu.edu.in")
            return
        }
        console.log(data)
        console.log(name, email, message)
    }
    return (
        <div>
            <form onSubmit={()=>handleSubmit("Sample string")}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Contact