import { Link } from "react-scroll"
import { me } from "../../assets"
import CardUi from "../../assets/CardUi"
import Grid from "../../assets/Grid"
import GridWireframe from "../../assets/GridWireFrame"
import Window from "../../assets/Window"
import CodeBlock from "../../Components/CodeBlock"
import { techStack } from "../../source"
import "./About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const code = `
const translator ={
 firstName:"Emmanuel",
 lastName:"Edlet",
 aka:"The Translator",
 services:repeat = () =>{
      //translation();
      //localization();
      //voice-over();
      //proof-reading();
    }}`;

const About = () => {
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
    .from(".box",{opacity:0,y:30,stagger:0.5});
  },{scope:container});
  return (
    <section id="about" ref={container}>
     <div className="container grid">
      {/* box start */}
      <div className="box self__start">
        <div className="spotlight" />
        <div className="cluster">
          <div className="flex user">
            <div className="profile">
              <img src={me} alt="" />
            </div>
            <div className="details">
              <h4>Emmanuel Edlet</h4>
              <p className="text__muted">Translator</p>
            </div>
          </div>
          <h2 className="sub__title">
          <span className="primary">Passionate</span> Translator.
          </h2>
          <p className="description">
           I adjust to various time zones to ensure seamless communication, regardless of your location.
          </p>
        </div>
        <Window color="var(--color-primary-light)" className="kit window"/>
      </div>
      {/* box end */}

      {/* box start */}
       <div className="col-2 box">
        <div className="spotlight"/>
        <div className="flex row cluster">
          <CodeBlock code={code} language="javascript"/>
          <div className="my__drive">
            <h2 className="sub__title">
            What <span className="primary">Drives Me</span>
            </h2>
            <div className="description">
            "I’m passionate about the art of translation 🌍 and language mastery ✍️. I believe the best texts resonate with cultural nuances 🗣️ and a commitment to clarity 📖. Whether working on a simple document or a complex manuscript, I bring precision 🎯, creativity ✨, and a reader-focused approach to every project."
            </div>
          </div>
          
        </div>
        <GridWireframe 
            width={"90%"}
            height={"auto"}
            color="var(--color-primary-light)"
            className="kit grid__wireframe"
          />
       </div>
      {/* box end */}

      {/* box start */}
        <div className="col-2 box">
          <div className="cluster">
            <div className="column">
              <h2 className="sub__title">
              My <span className="primary">Expertise</span>
              </h2>
              <p className="description">Always Evolving My Expertise</p>
            </div>
            <div className="column stacks__container">
              {
                techStack.map((stack, index) => (
                  <div className="flex__center btn stack" key={index}>
                    {stack.icon}
                    {stack.name}
                  </div>
                ))
              }
            </div>
          </div>
          <Grid className="kit grid__box"/>
          <CardUi 
            className="kit card__ui"
            color="gray"
            background="rgba(var(--bg-base-rgb),0.5)"/>
        </div>
      {/* box end */}

      {/* box start */}
       <div className="box flex__center last__box">
        <div className="cluster">
          <h2 className="text__white sub__title">
          I'm Committed to Collaboration and Clear Communication
          </h2>
          <div className="flex__center btn__wrapper">
            <Link to="contact" smooth={true} className="btn">Let's Collaborate</Link>
          </div>
        </div>
       </div>
      {/* box end */}
     </div>
    </section>
  )
}

export default About