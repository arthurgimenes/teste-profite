import React from 'react';
import Navbar from './componentes/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Main from "./componentes/Main"
import Footer from './componentes/Footer'

class App extends React.Component {
  constructor(){
      super()

      this.state = {
        active_language: 'PT',
      }
      this.languages = this.languages.bind(this)
  }

  languages(language) {
    this.setState({
      active_language: language
    })
  }

 

  render() {
    
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar language={this.languages} active_language={this.state.active_language} />
            <Main active_language={this.state.active_language}/>
            <Footer active_language={this.state.active_language}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
