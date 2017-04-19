import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';

export default class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-container">
          <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />

          <div className="logo centre">
            <div className="logo-outerCircle">
              <div className="logo-outerCircle-triangle">
                <div className="logo-outerCircle-triangle-square">
                  <div className="logo-outerCircle-triangle-square-innerCircle"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-container-title">
            <h1>Saturday Night at St. Joes</h1>
          </div>

          <div className="main-container-subtitle">
            <h3>Homepage for Saturday Night at St. Joes, an open meeting of Alcoholics Anonymous in Ann Arbor, MI</h3>
          </div>

          <div className="main-container-links">
            <ul>
              <li>
                <Link to={prefixLink('/more/')}>More Information About Saturday Night at St. Joes</Link>
              </li>
              <li>
                <Link to={prefixLink('/speakers/')}>Speaker Recordings</Link>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/5301+McAuley+Dr,+Ypsilanti,+MI+48197/@42.2647052,-83.6570101,17z/data=!3m1!4b1!4m5!3m4!1s0x883ca9226f931ddb:0x600e3a86363a58f2!8m2!3d42.2647013!4d-83.6548214" target="_blank">Directions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="main-footer">
          <p>
            by <a href="https://twitter.com/jdhorwitz" target="_blank">@jdhorwitz</a>
          </p>
        </div>
      </div>
    );
  }
}
