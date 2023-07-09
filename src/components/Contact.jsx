import '../styles/Contact.css'


export const Contact = () =>{
    const submitHandler = (e) =>{
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div class="container">
                    <div class="left"></div>
                    <div class="right">
                        <h1>CONTACT US</h1>
                        <input name="name" type="text" placeholder="Name" required/>

                        <input name="email" type="email" placeholder="Email" required/>

                        <input name="message" type="text" placeholder="Subject" required/>

                        <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>

                        <button className='submit' type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>

    )
}