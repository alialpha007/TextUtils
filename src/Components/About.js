import React from "react";
import Button from "react-bootstrap/Button";
import resume from "../data/cv.pdf";
function About(props) {
  let mode = props.mode;
  return (
    <>
      <div style={{ color: mode === "primary" ? "dark" : "white" }}>
        <header className="masthead">
          <p className="masthead-intro">Hi, I'm</p>
          <h1 className="masthead-heading">Muhammad ALI!</h1>
        </header>

        <div className="intro">
          <h1>Introduction</h1>
          <p>
            I'm a future Front End developer who loves{" "}
            <span className="bold">good design</span>,{" "}
            <span className="bold">good food</span> and{" "}
            <span className="bold">good people</span>. I am so excited about
            learning that makes interactive webpages and designs.
          </p>
          <p>
            I love the web and all the awesome new technologies. I'm excited to
            learn new things which makes the web more beautiful, functional, and
            perfect.
          </p>
        </div>

        <div className="where-Im-from">
          <h1>Where I'm From</h1>
          <p>
            I'm from Pakistan Lahore. Currently I'm stuying{" "}
            <span className="bold">Bachelors of Computer Science</span> program
            at COMSATS Lahore.
          </p>
        </div>

        <div className="more-about-me">
          <h1>More About Me</h1>
          <h2>What are your favorite hobbies?</h2>
          <p>
            My favorite hobby was playing Call of Duty. But now I am enjoying
            most of my time in study coding!
          </p>
          <h2>What's your dream job?</h2>
          <p>
            My goal is to become a full stack developer, so that I can manage
            front-end side and back-end side as well. Before achieve that goal,
            I need to master front-end development skills first!
          </p>
          <h2>What's your background?</h2>
          <p>
            I've been in tech stuff since I was very young. My dad bought me a
            computer in my childhood. He always wanted me to build my career in
            Computer Science. Well, Here I am! Now I am studying hard to master
            front end development skills.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            id="btn"
            className=" m-2 "
            variant="dark"
            href={resume}
            download="CV-Muhammad Ali-WEB DEVELOPMENT.pdf"
          >
            Download CV
          </Button>

          <a
            id="btn"
            className="btn btn-dark text-decoration-none m-2 "
            href="https://github.com/alialpha007"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
