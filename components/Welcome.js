import React from 'react'

export default class Welcome extends React.Component {

  render () {
    const {name} = this.props;

    return (
      <section className="welcome">
        <h2 className="welcome-title">
          Olá, {name}
        </h2>
        <ul className="welcome-links">
          <li><a href="javascript:void(0)">Cadastre-se</a></li>
          <li><a href="javascript:void(0)">Login</a></li>
        </ul>
      </section>
    )
  }
}
