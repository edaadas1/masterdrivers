import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "../assets/css/home.css";

const SelectBox = () => {

    const [course,setCourse] = React.useState(3);

    const updateSelectVal=(e)=>{
        console.warn(e.target.value)
        setCourse(e.target.value)
    }

    return (
    <div>
        <Select style={{marginRight:15}} value={course} displayEmpty onchange={updateSelectVal}>
            <MenuItem value="" disabled>Select Your Course</MenuItem>
            <MenuItem value={1}>Select Course</MenuItem>
            <MenuItem value={2}>Select Course</MenuItem>
            <MenuItem value={3}>Select Course</MenuItem>
            <MenuItem value={4}>Select Course</MenuItem>
        </Select>
      
    </div>
  )
}

export default SelectBox
