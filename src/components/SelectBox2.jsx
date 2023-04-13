import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectBox2 = () => {

    const [course,setCourse] = React.useState(3);

    const updateSelectVal=(e)=>{
        console.warn(e.target.value)
        setCourse(e.target.value)
    }

    return (
    <div>
        <Select style={{marginRight:50}} value={course} displayEmpty onchange={updateSelectVal}>
            <MenuItem value="" disabled>Select Your Location</MenuItem>
            <MenuItem value={1}>Select Location</MenuItem>
            <MenuItem value={2}>Select Location</MenuItem>
            <MenuItem value={3}>Select Location</MenuItem>
            <MenuItem value={4}>Select Location</MenuItem>
        </Select>
      
    </div>
  )
}

export default SelectBox2
