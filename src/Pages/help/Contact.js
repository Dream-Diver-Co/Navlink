import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
        <h3>Contact Us</h3>
        <form> 
            <label>
                <span>Your Email: </span>
                <input type="email" name='email' required />
            </label>
            <label>
                <span>Your Message: </span>
                <textarea name="message" id=""  required></textarea>
            </label>
            <button type="submit">Submit</button>     
        </form>
    </div>
  )
}
