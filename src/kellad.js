import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Countdown from "react-countdown";


const Clock2 = () => {
	const [date, setDate] = useState(new Date());
	const koolLopp = 1655456400000
	const koolAlgus = 1662021629000
	const derekiSunna = 1647057600000
	
	useEffect(() => {
  		const timerID = setInterval( () => tick(), 1000 );
  		return function cleanup() {
    		clearInterval(timerID);
    	};
 	});
 	const tick = () => {
 		setDate(new Date());
 	}
		
   return (
      <div className='kellad'>
        <div>
          <h4 className='kell-p'>Praegu</h4>
            <h2>
              <span>
                {date.toLocaleTimeString('en-GB')}
              </span>
            </h2>
          <h4 className='kell-p'>Kool lõppeb</h4>
            <h2>
              <Countdown date = {koolLopp} />
            </h2>
          <h4 className='kell-p'>Kool algab</h4>
            <h2>
              <Countdown date = {koolAlgus} />
            </h2>
          <h4 className='kell-p'>Dereki sünnipäev</h4>
            <h2>
                <Countdown date = {derekiSunna} />
            </h2>
        </div>
      </div>
    );
}
ReactDOM.render(
  <Clock2 />,
  document.getElementById('root')
);
