
import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
          padding: "50px", // Example: Add padding of 50px
          borderRadius: "10px", // Example: Add border-radius of 10px
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Example: Add box shadow
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
          <br />
          <br />

          <br />

          <br />
          <br />
          <div className="text-light mt-3" style={{ fontSize: '36px', textAlign: 'center', fontFamily: 'cursive', color: '#2c3e50', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
  Immerse Yourself in an Epic Mobile Adventure! 🌌
</div>
<br />

<a
  className="btn btn-outline-light btn-lg mx-3"
  href=" https://www.fiverr.com/hassanshah_442"
  target="_blank"
  rel="noopener noreferrer"
  role="button"
  aria-label="Check my Fiverr profile"
  style={{
    backgroundColor: '#1a1a1a',
    color: '#FFFFFF',
    border: '2px solid #2c3e50',
    borderRadius: '15px',
    padding: '12px 24px',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease-in-out',
  }}
>
  Embark on My Unique Fiverr Journey
</a>




        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;

