import React from 'react';
import ReactDOM from 'react-dom'
import Countdown from "react-countdown";

function getDate(year, day){
  	var date = new Date(year, 0);
  	return new Date(date.setDate(day));
	}

class Clock extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      koolLopp: getDate(new Date().getFullYear(), 158),
      koolAlgus: getDate(new Date().getFullYear(), 244)
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {    this.setState({      date: new Date()    });  }

  render() {
    return (
      <div className='kellad'>
        <div>
        	<h4 className='kell-p'>Praegu</h4>
        	<h2>
        	<span>
          {this.state.date.toLocaleTimeString('en-GB')}
        	</span>
        	</h2>
        	<h4 className='kell-p'>Kool lõppeb</h4>
        	<h2>
          	<Countdown date = {this.state.koolLopp} />
        	</h2>
        	<h4 className='kell-p'>Kool algab</h4>
        	<h2>
        		<Countdown date = {this.state.koolAlgus} />
        	</h2>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
