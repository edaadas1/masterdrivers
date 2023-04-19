import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "../assets/css/home.css";

const SelectBox = () => {

    const [course, setCourse] = React.useState(10);

    const handleChange = (event) => {
        setCourse(event.target.value);
    };
    
    return (
    <div>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label="Course"
          onChange={handleChange}
        >
          <MenuItem value={10} disabled>Select Your Course</MenuItem>
          <MenuItem value={20}>G1 Knowledge Preparation</MenuItem>
          <MenuItem value={30}>Online Beginner Driver Education</MenuItem>
        </Select>
      
    </div>
  )
}

export default SelectBox
