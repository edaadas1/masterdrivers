import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectBox2 = () => {

    const [location, setLocation] = React.useState(10);

    const handleChange = (event) => {
        setLocation(event.target.value);
    };
    
    return (
    <div>
        <Select style={{marginLeft:15,marginRight:15}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value={10} disabled>Select Your Location</MenuItem>
          <MenuItem value={20}>KW Region(Kitchener,Waterloo,Cambridge)</MenuItem>
          <MenuItem value={30}>Barrie</MenuItem>
          <MenuItem value={40}>Brantford</MenuItem>
          <MenuItem value={50}>Burlington</MenuItem>
          <MenuItem value={60}>Guelph</MenuItem>
          <MenuItem value={70}>Hamilton</MenuItem>
          <MenuItem value={80}>London</MenuItem>
          <MenuItem value={90}>Milton-Oakville</MenuItem>
          <MenuItem value={100}>Mississauga</MenuItem>
          <MenuItem value={110}>Orangeville</MenuItem>
          <MenuItem value={120}>Oshawa</MenuItem>
          <MenuItem value={130}>Peterborough,Lindsay,Lakefield,Norwood</MenuItem>
          <MenuItem value={140}>Richmond Hill,Vaughan,Woodbridge,Thornhill</MenuItem>
          <MenuItem value={150}>St.Catharines</MenuItem>
          <MenuItem value={160}>Whitby,Ajax,Pickering</MenuItem>
          <MenuItem value={170}>Windsor</MenuItem>
          <MenuItem value={180}>Toronto</MenuItem>

          
        </Select>
      
    </div>
  )
}

export default SelectBox2
