import { Paper, TextField } from '@material-ui/core'
import { useState } from 'react';
import React from 'react'

const SearchBar = ({onFormSubmit}) => {
    const [search, setSearch] = useState('');

    const handleSumbit = (e) =>{
        e.preventDefault();
        onFormSubmit(search);
    }
    const handleChange = (e) =>{
        setSearch(e.target.value);
    }

  return (
    <Paper elevation={6} style={{padding:'20px'}}>
        <form onSubmit={handleSumbit}>
            <TextField fullWidth label='Search...' onChange={handleChange}/>
        </form>
    </Paper>
  )
}

export default SearchBar