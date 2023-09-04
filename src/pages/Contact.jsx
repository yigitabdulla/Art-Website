import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import "../styles/contact.css"


function Contact() {

  const [popUp, setPopUp] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', this)
      .then((result) => {
        console.log(result.text);
        setPopUp(true)
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleClick = () => {
    setPopUp(false)
    location.reload(false)
  }

  return (
    <>
      <Navbar />
      <div id="container">
        <h1>&bull; İLETİŞİME GEÇ &bull;</h1>
        <form ref={form} onSubmit={sendEmail} id="contact_form">
          <div className="name">
            <label htmlFor="name"></label>
            <input type="text" placeholder="İSİM" name="user_name" id="name_input" required />
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input type="email" placeholder="E-mail" name="user_email" id="email_input" required />
          </div>
          <div className="telephone">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Telefon" name="telephone" id="telephone_input" required />
          </div>
          <div className="subject">
            <label htmlFor="subject"></label>
            <select placeholder="Konu" name="subject" id="subject_input" required>
              <option disabled hidden selected>Konu</option>
              <option>Proje başlatmak istiyorum</option>
              <option>Soru sormak istiyorum</option>
              <option>Bir çalışmana teklif yapmak istiyorum</option>
            </select>
          </div>
          <div className="message">
            <label htmlFor="message"></label>
            <textarea name="message" placeholder="Mesaj" id="message_input" cols="30" rows="5" required></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Mesaj Gönder" id="form_button" />
          </div>
        </form>
        {popUp ? <div className='popUp'>
          <div className='popUp-message'>
            Mesajınız başarıyla iletildi
            <svg id='ok' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightgreen" className="bi bi-check2-circle" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
          </div>
          <svg onClick={handleClick} id='close' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f1807e" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div> : popUp}
      </div>
    </>
  )
}

export default Contact