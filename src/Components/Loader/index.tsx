import { BounceLoading } from "respinner"

const Loader = () => {
  return (
    <div 
    style={{
      display: "flex",
      alignItems:"center",
      justifyContent:"center",
      height:"100%",
      minHeight:"100vh",
      width:"100%",
      position:"fixed",
      top:"0",
      left:"0",
      zIndex:500,
      background:"var(--bg-base)"
    }}>
      <BounceLoading fill="#5100ff"
      />
    </div>
  )
}

export default Loader