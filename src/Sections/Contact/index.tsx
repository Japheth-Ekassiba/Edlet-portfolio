import ListOptionUi from "../../assets/ListOptionUi"
import { contactInfo } from "../../source"
import "./Contact.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const container:any = useRef();
  useGSAP(()=>{
    gsap.timeline({
      delay:0.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top"
      }
    })
    .from("#contact .box",{opacity:0,y:30,stagger:0.5})
    .from("#contact .contact__form", { opacity: 0, x: 30});
  },{scope:container});
  return (
    <section id="contact" ref={container}>
      <div className="container">
        <div className="left__column">
          <div className="box">
            <div className="cluster">
              <h2 className="sub__title">
                Let’s <span className="primary">create something</span> amazing together!
              </h2>
              <p className="description">
                Feel free to reach out for translation projects, collaborations, or language services via the form or email!
              </p>
            </div>

            <ListOptionUi className="list__ui" />
          </div>
          <div className="box">
            <div className="cluster">
              {
                contactInfo.map((contact, index) => (
                  <div className="flex option" key={index}>
                    <div className="icon__container">{contact.icon}</div>
                    <div className="details">
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted value">{contact.value}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <form className="contact__form">
          <div className="spotlight" />
          <h2 className="sub__title">
            Let's Work <span className="primary">Together!</span>
          </h2>
          <div className="row">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              className="control"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              className="control"
            />

          </div>
          <div className="row">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="control"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              className="control"
            />
          </div>
          <textarea name="message" placeholder="Message" className="control"></textarea>
          <button className="btn btn__primary submit__btn">Send Now</button>
        </form>
      </div>
    </section>
  )
}

export default Contact