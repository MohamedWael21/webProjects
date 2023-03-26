import { Box, Button, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchEercises = ({bodyPart, setExercises, setBodyPart}) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    const handleSearch = async () => {
        if(search){
            const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",
            exercisesOptions);

            const matcedExercises = exercisesData.filter((exercise) => {
                    return exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
            });
            setSearch('');
            setExercises(matcedExercises);
        }
    }

    useEffect(() => {
        const fetchedExercisesBody = async ()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }
        fetchedExercisesBody();
    }, [])
    
  return (
    <Stack 
    mt='40px' 
    padding="20px"
    alignItems='center'>
        <Typography 
        textAlign='center'
        sx={{
            fontSize: {lg: '44px', xs: '30px'},
            fontWeight: '700',
            mb: '20px',
        }}>
            Awesome Exercises You <br/>
            Should Know
        </Typography>
        <Box 
        position='relative' 
        mb='72px'>
            <TextField 
                height="76px"
                value={search}
                onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
                placeholder="Search Exercises"
                type="text"
                sx={{
                    input: {fontWeight: '700',
                    border: 'none',
                    borderRadius: '4px'},
                    width: {lg: '1000px', xs: '350px'},
                    backgroundColor: '#fff',
                    borderRadius: '4px'
                }}
            />
            <Button 
            className='search-btn'
            sx={{
                backgroundColor: '#FF2625',
                color: '#fff',
                textTransform: 'none',
                width: {lg: '175px', xs: '80px'},
                fontSize: {lg: '20px', xs:'14px'},
                height: '56px',
                position: 'absolute',
                right: '0'
            }}
            onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{
            width: '100%',
            position: 'relative',
            p: '20px'
        }}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true}/>
        </Box>
    </Stack>
  )
}

export default SearchEercises