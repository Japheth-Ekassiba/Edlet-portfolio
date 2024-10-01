import "./Points.css"
import Odometer from "react-odometerjs"
import "odometer/themes/odometer-theme-default.css"
import { useEffect, useState } from "react"

const Points = () => {
  const [experience,setExperience] = useState(0);
  const [projects,setProjects] = useState(0);
  const [awards,setAwards] = useState(0);
  const [clients,setClients] = useState(0);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setExperience(6);
      setProjects(100);
      setAwards(15);
      setClients(40);
    },4000);

    return () => clearTimeout(timeout);
  },[]);
  return (
    <div className="points">
      <div className="spotlight"/>
      {/* Start of Point */}
      <div className="point">
        <div className="flex">
          <Odometer value={experience} className="sub__title"/>
          <h3 className="sub__title">+</h3>
        </div>
        <p className="text__muted">Years Of Experience</p>
      </div>

      {/* End of Point */}

      {/* Start of Point */}
      <div className="point">
        <div className="flex">
          <Odometer value={projects} className="sub__title"/>
          <h3 className="sub__title">+</h3>
        </div>
        <p className="text__muted">Completed Projects</p>
      </div>

      {/* End of Point */}

      <div className="point">
        <div className="flex">
          <Odometer value={awards} className="sub__title"/>
          <h3 className="sub__title">🏆</h3>
        </div>
        <p className="text__muted">Awards</p>
      </div>

      {/* End of Point */}

      <div className="point">
        <div className="flex">
          <Odometer value={clients} className="sub__title"/>
          <h3 className="sub__title">🏆</h3>
        </div>
        <p className="text__muted">Clients Worldwide</p>
      </div>

      {/* End of Point */}
    </div>
  )
}

export default Points