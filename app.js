
import React from 'react'
import ReactDOM from 'react-dom'
import Syamil from './syamil-alkhawarizmi.js'

require('./app.scss')

class App extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render(){

    return(

      <div className="grid__row content centered">
        <h1>Hello world from {Syamil.getName()}</h1>
        <h2>Hi, I am {Syamil.getName()}</h2>  

        <div className="grid__row content centered">
          <img className="photo" src="images/syamil-2017-08-07-01.jpg"/>
          <img className="photo" src="images/syamil-2017-08-07-02.jpg"/>
          <img className="photo" src="images/syamil-2017-08-07-03.jpg"/>
        </div>

        <div className="grid__row content centered"> 
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td> : </td>
                <td>{Syamil.getName()}</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td> : </td>
                <td>{Syamil.getDOBString()}</td>
              </tr>
              <tr>
                <td>POB</td>
                <td> : </td>
                <td>{Syamil.getPOB()}</td>
              </tr>            
              <tr>
                <td>Father</td>
                <td> : </td>
                <td>{Syamil.getFather()}</td>
              </tr>
              <tr>
                <td>Mother</td>
                <td> : </td>
                <td>{Syamil.getMother()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    )
  }

}

ReactDOM.render(<App />, document.getElementById("app"))
