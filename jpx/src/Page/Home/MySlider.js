import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function valuetext(value) {
  return `${value} Questions`;
}

export default function MySlider(props) {
  let style = {
    marginLeft: "160px"

  }
  let myMarks = marks;
  if(props.max === 25){
    myMarks = marksSmall;
  }
  return (
    <Box sx={{ width: 300 }} >
      <Slider
        style = {style}
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={5}
        min = {5}
        max = {props.max}
        valueLabelDisplay="auto"
        marks={myMarks}
        onChange = {props.handleSliderChange}
      />
    </Box>
  );
}


const marks = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 46,
    label: '46',
  },
];

const marksSmall = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 25,
    label: '25',
  }
];