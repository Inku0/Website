import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Countdown from "react-countdown";


const Clock2 = () => {
	const [date, setDate] = useState(new Date());
	const [koolLopp, setKoolLopp] = useState(1654506000000);
	const [koolAlgus, setKoolAlgus] = useState(1630486800000);
	
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
        </div>
      </div>
    );
}
ReactDOM.render(
  <Clock2 />,
  document.getElementById('root')
);
