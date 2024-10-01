import { Link } from "react-scroll"
import { me } from "../../assets"
import SocialHandles from "../../Components/SocialHandles/SocialHandles"
import "./Header.css"
import Points from "../../Components/Points"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const container:any = useRef();
  useGSAP(()=>{
    gsap.timeline({delay:0.5})
    .from(".points",{opacity:0,y:-30})
    .from(".me",{opacity:0,scale:0.7})
    .from([".user__info .sub__title","user__info .description"],{opacity:0,y:20})
    .from(".user__info .title",{opacity:0,x:-30})
    .from(".user__info .buttons",{opacity:0,x:-30})
    .from(".points .point",{opacity:0,x:-30,stagger:0.5})
  },{scope:container})
  return (
    <section id="header" className="bg__secondary" ref={container}>
      <div className="spotlight" />
      <div className="container">
        <div className="grid">
          <div className="me">
            <img src={me} alt="" />
          </div>
          <div className="user__info">
            <h2 className="sub__title">
            Hi 👋, I'm Emmanuel
            </h2>
            <h1 className="title">Translator and Proof Reader</h1>
            <p className="description">"I specialize in bilingual translation and proofreading, focusing on delivering accurate and culturally nuanced content. With a passion for clarity and attention to detail, I transform ideas into polished texts that resonate with diverse audiences. Let’s collaborate to ensure your message shines in any language!"</p>
            <div className="flex buttons">
              <SocialHandles />
              <Link to="contact" smooth={true} className="btn btn__primary">
              Contact Me
              </Link>
            </div>
          </div>
          <Points />
        </div>
      </div>
    </section>
  )
}

export default Header