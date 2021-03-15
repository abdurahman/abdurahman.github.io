import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Credentials = () => {
  return (
    <div className="section" id="credentials">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Capstone Project</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.credentials.map(credential => (
                <Card
                  key={credential.id}
                  heading={credential.title}
                  paragraph={credential.para}
                  imgUrl={credential.imageSrc}
                  projectLink={credential.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credentials
