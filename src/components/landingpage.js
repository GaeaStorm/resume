import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Typist from "react-typist";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img
            src="https://i.ibb.co/RPyVgz1/Icon-2.png"
            alt="avatar"
            className="avatar-img"
            style={{height: "250px", padding: "4% 3% 1% 3%"}}
            />
            <div className="banner-text">
            <h1>
              <Typist
                style={{
                  show: true,
                  blink: true,
                  element: "|",
                  hideWhenDone: true
                }}>
                <span> Computer Science Student </span>
                <Typist.Backspace count={25} delay={2000} />
                <span> Graduating May 2021 </span>
                <Typist.Backspace count={20} delay={2000} />
                <span> Computer Science Student </span>
              </Typist>
            </h1>

              <hr />
              <h4>Gayatri Sawant</h4>

              <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/gayatri-sawant-92b901102/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a href="https://github.com/GaiSawant/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/gayatri.sawant.16" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>

              {/* Twitter */}
              <a href="https://twitter.com/Gaea_Storm" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter-square" aria-hidden="true" />
              </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
