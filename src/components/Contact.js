import '../styles/Contact.css';
import React from 'react';
// import emailjs from 'emailjs-com';



export default function Contact() {
  // form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // emailjs.sendForm('service_33am0nq', 'template_02lne1s', form.current, 'ptantsidis@hotmail.com ')
  //   emailjs.sendForm('service_33am0nq', 'template_02lne1s', e.target, 'ptantsidis@hotmail.com ')
  //     .then((result) => {
  //       window.location.reload()
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };

  return (
    <div>
      <div style={{ backgroundImage: 'url(/assets/images/sunset.jpeg)' }}>
        <h2>Contact Me</h2>
        <form className="contact-form" >
          <p>Philip Tantsidis</p>
          {/* <input type="text" name="user_name" /> */}
          <p> ptantsidis@gmail.com  </p>
          {/* <input type="email" name="user_email" /> */}
          <p>705-791-9456</p>
          {/* <textarea name="message" />
          <input type="submit" value="Send" /> */}
        </form>
        {/* <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js">
        </script> */}

      </div>
    </div>
  );
};
