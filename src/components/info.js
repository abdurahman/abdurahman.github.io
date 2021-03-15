import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import PDFResumeReader from "./PDFResumeReader"
import PDFCoverLetterReader from "./PDFCoverLetterReader";

const Info = () => {
  return (
    <div className="section" id="info">
      <div className="container">
        <div className="info-section">
          <div className="work-wrapper">
            <Fade bottom cascade>
              <h1>Info</h1>
            </Fade>
            <Fade bottom cascade>
              <h2>Resume</h2>
            </Fade>
            <p>
              <PDFResumeReader />
            </p>
            <Fade bottom cascade>
              <h2>Cover Letter</h2>
            </Fade>
              <PDFCoverLetterReader />
            <Fade bottom cascade>
              <h2>Statement Of Career Goal</h2>
            </Fade>
            <p>
              {data.infoParaOne}
              <br></br>
              <br></br>
              {data.infoParaTwo}
              <br></br>
              <br></br>
              {data.infoParaThree}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
