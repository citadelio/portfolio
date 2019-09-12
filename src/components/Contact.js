import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ReactComponent as Illustration } from '../contact.svg';

const Contact = () => {
    const [modalState, setModalState] = useState(false);
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const msg = await fetch("http://localhost:8080/messages", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(formdata)
    //         })
    //         alert(`Thank You! ${formdata.name}`)
    //         setFormdata({ name: '', email: '', message: '' });
    //         toggleModal()
    //     }
    //     catch (err) {
    //         alert(err);
    //     }


    // }
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

      const handleSubmit = (e) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...formdata })
            })
              .then(() =>{

                  alert(`Thank You! ${formdata.name}`)
                  setFormdata({name:'', email:'', message:''}); toggleModal()

              })
              .catch(error => alert(error));

            e.preventDefault();
          };

    const toggleModal = () => {
        setModalState(!modalState)
    }
    return (
        <React.Fragment>
            <Header page='contact' />
            <section className={`contact-wrapper  ${modalState ? "modal-open" : ''}`}>
                <div className="custom-container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="page-head">
                                <p className="sub-head">Say Hello</p>
                                <h1>I'd love to hear from you. </h1>
                                <button className="btn btn-blue btn-contact" type="button" onClick={toggleModal}>Send me a Message</button>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-img sent">
                                <Illustration className="contact-svg-illustration" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`modal ${modalState ? "show" : ''}`} style={{ display: modalState ? "block" : "none" }} id="contactForm">
                    <div className="modal-content">

                        <div className="contact-detail">
                            <div className="custom-container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="contact-detail--desc">
                                            <div className="contact-tiles mb-4">
                                                <h3 className="mb-2">I currently live in</h3>
                                                <a href="/" className="">Port Harcourt, Nigeria</a>
                                            </div>
                                            <div className="contact-tiles mb-5">
                                                <h3 className="mb-2">Email</h3>
                                                <a href="mailto:husseinwarrake@gmail.com" className="">husseinwarrake@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="contact-detail--form">
                                            {/* <form id="contact"  method="post" onSubmit={handleSubmit} data-toggle="validator"> */}
                                            <form id="contact" method="post" onSubmit={handleSubmit} data-toggle="validator">
                                                <input type="hidden" name="form-name" value="contact" className="hidden" />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" onChange={handleChange} value={formdata.name} className="form-control" id="name" name="name" placeholder="Name" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="email" onChange={handleChange} value={formdata.email} className="form-control" id="email" name="email" placeholder="Email" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea className="form-control" onChange={handleChange} value={formdata.message} id="message" name="message" placeholder="Message" required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 hidden" style={{ display: "none" }}>
                                                        <div className="form-group">
                                                            <input className="form-control" name="bot-field" placeholder="Don’t fill this out if you're human:" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn btn-blue cont-send-btn">Send</button>
                                                        <button onClick={(e) => { e.preventDefault(); setModalState(false) }} className="btn btn-link cont-send-btn">Close</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <Footer />
        </React.Fragment>
    )
}

export default Contact;