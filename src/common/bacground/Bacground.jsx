
import Container from "@mui/material/Container"
import "./BacgroundStyles.scss"
const Bacground=(props)=>{
    return(
        <div className="backgroundContainer">
        <Container className="mainContainer"
          components="main"
          maxWidth="xs"
          sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            background: "white",
          }}
        >
          {props.children}
        </Container>
      </div>
    )
}
export default Bacground;