import React, { useState } from 'react';

function ToggleButtonComponent(props) {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'CouponScorpion', value: '1' },
    { name: 'OnlineCourses.org', value: '2' }
  ];

  const handleRadioChange = (value) => {
    setRadioValue(value);
    props.changeSourceButton(value);
  };

  return (
    <div>
      {radios.map((radio, idx) => (
        <button
          key={idx}
          style={{
            backgroundColor: radioValue === radio.value ? 'lightblue' : 'white',
            border: '1px solid #ccc',
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer'
          }}
          onClick={() => handleRadioChange(radio.value)}
        >
          {radio.name}
        </button>
      ))}
    </div>
  );
}

function TogglePageButtonComponent(props) {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' }
  ];

  const handlePageChange = (value) => {
    setRadioValue(value);
    props.changePageButton(value);
  };

  return (
    <div>
      {radios.map((radio, idx) => (
        <button
          key={idx}
          style={{
            backgroundColor: radioValue === radio.value ? 'lightblue' : 'white',
            border: '1px solid #ccc',
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer'
          }}
          onClick={() => handlePageChange(radio.value)}
        >
          {radio.name}
        </button>
      ))}
    </div>
  );
}

export { ToggleButtonComponent, TogglePageButtonComponent };
