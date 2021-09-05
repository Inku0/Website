import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Countdown from "react-countdown";

const ClockImportantDates = () => {
	const [date, setDate] = useState(new Date());
    const importantDates = {
	    koolLopp : 1655456400000,
        koolAlgus: 1662021629000,
        derekiSunna: 1647057600000
    };

    useEffect(() => {
  		const timerID = setInterval( () => tick(), 1000 );
  		return function cleanup() {
    		clearInterval(timerID);
    	};
 	});

 	const tick = () => {
 		setDate(new Date());
 	};
		
   return (
      <div className='kellad'>
          <div className={'kell-f'}>
            <h4 className='kell-p'>Praegu</h4>
              <h2>
                <span>
                  {date.toLocaleTimeString('en-GB')}
                </span>
              </h2>
          </div>
          <div className={'kell-f'}>
            <h4 className='kell-p'>Kool lõppeb</h4>
              <h2>
                <Countdown date = {importantDates.koolLopp} />
              </h2>
          </div>
          <div className={'kell-f'}>
            <h4 className='kell-p'>Kool algab</h4>
              <h2>
                <Countdown date = {importantDates.koolAlgus} />
              </h2>
          </div>
          <div className={'kell-f'}>
            <h4 className='kell-p'>Dereki sünnipäev</h4>
              <h2>
                  <Countdown date = {importantDates.derekiSunna} />
              </h2>
            </div>
      </div>
    );
};

const ClockVaheajad = () => {
    const vaheajad = {
        sugisvaheaeg: 1635109200000,
        jouluvaheaeg: 1640210400000,
        talvevaheaeg: 1645999200000,
        kevadvaheaeg: 1650834000000,
        suvevaheaeg: 1655154000000,
    };

    const findNearestVaheaeg = () => {
        for (let value in Object.values(vaheajad)) {
            if (+new Date(Object.values(vaheajad)[value]) > +new Date()) {
                console.log(+new Date(Object.values(vaheajad)[value]));
                return +new Date(Object.values(vaheajad)[value]);
            }
        }
    };

    return (
        <div className='kellad'>
            <h4 className='kell-p'>Sügisvaheajani</h4>
            <h2>
                <Countdown date = {vaheajad.sugisvaheaeg} />
            </h2>
            <h4 className='kell-p'>Jõuluvaheajani</h4>
            <h2>
                <Countdown date = {vaheajad.jouluvaheaeg} />
            </h2>
            <h4 className='kell-p'>Talvevaheajani</h4>
            <h2>
                <Countdown date = {vaheajad.talvevaheaeg} />
            </h2>
            <h4 className='kell-p'>Kevadvaheajani</h4>
            <h2>
                <Countdown date = {vaheajad.kevadvaheaeg} />
            </h2>
        </div>
    );
}

ReactDOM.render(
    <div className={'kellad-container'}>
        <ClockImportantDates />
        <ClockVaheajad />
    </div>,
  document.getElementById('root')
);
