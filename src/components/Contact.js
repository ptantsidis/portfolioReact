import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <section id="contact">
        <form>
          <div className="form-item">
            <div className="form-group">
              <label for="name">Name:</label>
              {/* <input type="text" id="name" name="Name" placeholder="Phil Tantsidis"> */}
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              {/* <input type="text" id="email" name="Email" placeholder="ptantsidis@hotmail.com"> */}
            </div>
            <div className="form-group">
              <label for="message">Message:</label>
              {/* <input type="text" id="message" name="Message" placeholder="Anytime - 705-791-9456"> */}
            </div>
          </div>
          <button id="submit" value="Send">Submit</button>
        </form>
      </section>
    </div>
  );
}
