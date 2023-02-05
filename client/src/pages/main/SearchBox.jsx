import { useState } from 'react';
import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const [age, setAge] = useState('');
  const [baths, setBaths] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setBaths(event.target.value);
  };

  console.log(baths)

  return (
    <>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        size='small'
        placeholder='Search...'
      />
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id="demo-select-small">Bed</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1 Bed</MenuItem>
          <MenuItem value={20}>2 Bed</MenuItem>
          <MenuItem value={30}>3 Bed</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id="demo-select-small">Bath</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={baths}
          label="Age"
          onChange={handleChangeTwo}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1 Bath</MenuItem>
          <MenuItem value={1.5}>1.5 Bath</MenuItem>
          <MenuItem value={2}>2 Bath</MenuItem>
          <MenuItem value={2.5}>2.5 Bath</MenuItem>
          <MenuItem value={3}>3 Bath</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default SearchBox;