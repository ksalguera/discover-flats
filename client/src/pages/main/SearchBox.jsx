import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ searchValue, setSearchValue }) => {
  const [open, setOpen] = useState(false);
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    navigate('/properties');
  }

  const handleChange = (event) => {
    //setBeds(event.target.value);
    setOpen(true);
  };

  const handleChangeTwo = (event) => {
    //setBaths(event.target.value);
    setOpen(true);
  };

  const handleClose = reason => {
    if (reason === 'clickaway') { return }
    setOpen(false);
  };

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
        value={searchValue}
        onChange={handleSearch}
        onClick={() => setSearchValue('')}
      />
      <FormControl sx={{ m: 1, minWidth: 100 }} size='small'>
        <InputLabel id="demo-select-small">Bed</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={beds}
          label='bed'
          onChange={handleChange}
        >
          <MenuItem value=''>None</MenuItem>
          <MenuItem value={1}>1 Bed</MenuItem>
          <MenuItem value={2}>2 Bed</MenuItem>
          <MenuItem value={3}>3 Bed</MenuItem>
          <MenuItem value={4}>4 Bed</MenuItem>
          <MenuItem value={5}>5+ Bed</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 100 }} size='small'>
        <InputLabel id="demo-select-small">Bath</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={baths}
          label='baths'
          onChange={handleChangeTwo}
        >
          <MenuItem value=''>None</MenuItem>
          <MenuItem value={1}>1 Bath</MenuItem>
          <MenuItem value={1.5}>1.5 Bath</MenuItem>
          <MenuItem value={2}>2 Bath</MenuItem>
          <MenuItem value={2.5}>2.5 Bath</MenuItem>
          <MenuItem value={3}>3 Bath</MenuItem>
        </Select>
      </FormControl>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='info' sx={{ width: '100%' }}>Floorplan search is coming soon.</Alert>
      </Snackbar>
    </>
  )
}

export default SearchBox;