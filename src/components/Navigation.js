import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  const pathImages = 'dist/src/images/';
  const logo = `${pathImages}logo.png`
  const brand1 = `${pathImages}icons/bandeira1.png`
  const brand2 = `${pathImages}icons/bandeira2.png`
  const brand3 = `${pathImages}icons/bandeira3.png`
  const skype = `${pathImages}icons/skype.png`
  const iconSearch = `${pathImages}icons/icone-pesquisa.png`

  return (
    <header className="navigation">
      <div className="container">
        <div className="navigation__wrap">
          <div className="navigation__logo">
            <a href="/" title="Home">
              <img src={logo} alt="Profite"/>
            </a>
          </div>

          <div className="navigation__login">
            <p>Olá, Visitante</p>
            <a href="/">Cadastre-se</a> - <a href="/">Login</a>
          </div>


          <div className="navigation__search">
            <form>
              <button className="navigation__search__button" style={{backgroundImage: `url(${iconSearch})`}}></button>
              <input type="text" className="navigation__search__input" placeholder="Buscar por ..."/>
            </form>
          </div>

          <div className="navigation__contact">
            <a href="/" className="navigation__contact__country">
              <img src={brand1} alt=""/>
            </a>
            <a href="/" className="navigation__contact__country">
              <img src={brand2} alt=""/>
            </a>
            <a href="/" className="navigation__contact__country">
              <img src={brand3} alt=""/>
            </a>
            <p>
              <img src={skype} alt="" className="navigation__contact__skype"/>
              11 9333-4455
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
