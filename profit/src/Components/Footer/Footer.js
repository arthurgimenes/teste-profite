import React from 'react'
import Title from '../Title/Title'
import './footer.scss'
const Footer = (props) => {

  return(
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title title="Localização" color='#fff' />
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer