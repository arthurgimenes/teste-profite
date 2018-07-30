import React, { Component } from 'react';

class Credits extends Component {

  render() {
    return (
      <div className="credits">

        <div className="credits__credit">
          <small className="credits__small">Created by</small>
          <a href="/" title="Profite">
            <img className="credits__img"
              src={require("../../assets/img/footer/profite.svg")}
              alt="Profite"
            />
          </a>
        </div>

        <div className="credits__credit">
          <small className="credits__small">Powered by</small>
          <a href="/" title="VTEX">
            <img className="credits__img"
              src={require("../../assets/img/footer/vtex.svg")}
              alt="VTEX"
            />
          </a>
        </div>

      </div>
    );
  }
}

export default Credits;