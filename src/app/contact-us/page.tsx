import Header from "@/app/components/header"

export default function Contact(){
    return(<div><Header/>
        <div className="contact-container">
      <h1 className="contact-heading"><b>Contact Us</b></h1>
      <p className="contact-description">
         If you dont understand anything, feel free to ask.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">send me</button>
      </form>
      <p style={{ color: 'blue' }}><b>Email:</b><a href="mailto:shizatariq562@gmail.com">shizatariq562@gmail.com</a></p>
      <p style={{ color: 'blue' }}><b>LinkedIn:</b><a href="https://www.linkedin.com/in/shiza-tariq-171b75245"target="_blank">www.LinkedIn.com</a></p> 
      <br/><br/>
      
            
 </div>           
        </div>
    )
}