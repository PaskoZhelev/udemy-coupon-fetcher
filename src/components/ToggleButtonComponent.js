import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import {useState} from 'react'

function ToggleButtonComponent(props) {
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'CouponScorpion', value: '1' },
      { name: 'OnlineCourses.org', value: '2' }
    ];
  
    return (
      <>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="info"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                setRadioValue(e.currentTarget.value)
                props.changeSourceButton(e.currentTarget.value)
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
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
  
    return (
      <>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="info"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                setRadioValue(e.currentTarget.value)
                props.changePageButton(e.currentTarget.value)
                props.fetchPosts()
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }

  export {ToggleButtonComponent, TogglePageButtonComponent}
  