import React, { Component } from 'react';

class Credits extends Component {

  render() {
    return (
      <div className="credits">

        <div className="credits__credit">
          <small className="credits__small">Created by</small>
          <img className="credits__img"
            src={require("../../assets/img/footer/profite.svg")}
            alt="Profite"
          />
        </div>

        <div className="credits__credit">
          <small className="credits__small">Powered by</small>
          <img className="credits__img"
            src={require("../../assets/img/footer/vtex.svg")}
            alt="VTEX"
          />
        </div>

      </div>
    );
  }
}

export default Credits;