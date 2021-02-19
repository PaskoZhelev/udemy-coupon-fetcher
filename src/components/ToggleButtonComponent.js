import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import {useState} from 'react'

export default function ToggleButtonComponent(props) {
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
                props.handleButtonClicked(e.currentTarget.value)
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  