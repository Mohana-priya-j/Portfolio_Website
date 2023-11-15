import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rbqyq44",
        "template_uoj32b5",
        formRef.current,
        "ZPWQEpxWEkQqn09Sh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
      <div className="c-right">
          <h1>Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9876543210
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              jeny@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              245 King Street, Chennai-05
            </div>
          </div>
        </div>
        <div className="c-right">
          <center>
          <p className="c-desc">
            <h1>GET IN TOUCH </h1> 
            <br></br>
            For new updates! Open to freelance opportunities, 
            I bring a wealth of experience in design and coding. 
            Let's collaborate to bring your digital vision to life</p>
          
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#fff"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#fff"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#fff"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#fff"}} rows="5" placeholder="Message" name="message" /><br></br>
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Contact;
