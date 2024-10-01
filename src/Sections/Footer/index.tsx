import { Link } from "react-scroll"
import Logo from "../../Components/Logo"
import SocialHandles from "../../Components/SocialHandles/SocialHandles"
import { footer } from "../../source"
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="spotlight" />
      <div className="container">
        <div className="grid">
          <div className="cols-2 column">
            <Logo />
            <p className="text__muted description">
            Providing accurate, high-quality translations 🌍 with attention to detail ✍️ and a client-focused approach 🤝. Let’s communicate your message clearly together 🌟.
            </p>
            <SocialHandles/>
          </div>
          {footer.map((list,index)=>(
            <div className="column" key={index}>
              <h3 className="group__name">{list.group}</h3>
              <div className="routes__container">
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  list?.routes.map((route:any,index:number)=>(
                    <Link 
                    to={route?.id} 
                    key={index}
                    smooth={true}
                    className="route__item">{route.name}</Link>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
        <article className="copyright">
          <h3>Copyright &copy; 2024 Emmanuel Edlet. All rights reserved.</h3>
          <p className="text__muted">
          Powered By: Joe-Lin Developers @ <span className="primary">joelin.com</span>
          </p>
        </article>
      </div>
    </footer>
  )
}

export default Footer