import { FaTimes } from "react-icons/fa"
import Logo from "../Logo"
import  "./Sidebar.css"
import { navigation } from "../../source"
import { Link } from "react-scroll"

type Props = {
  openSidebar?: boolean;
  onClose?: () => void;
}

const Sidebar = ({openSidebar, onClose}: Props) => {
  return (
    <div className={`sidebar ${openSidebar? "visible":""}`}>
      <div className="sidebar__wrapper">
        <div className="flex__center top">
          <Logo/>
          <div className="icon__container" onClick={onClose}>
            <FaTimes/>
          </div>
        </div>
        <div className="middle navlinks">
          {navigation.map((nav, index) => (
            <Link
              to={nav.id}
              className="navitem"
              onClick={onClose}
              key={index}>
                {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar