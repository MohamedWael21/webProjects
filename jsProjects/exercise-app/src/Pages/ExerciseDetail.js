import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Detail from '../Components/Detail'
import ExercisesVideos from '../Components/ExercisesVideos';
import SimilarExercises from '../Components/SimilarExercises';
import { exercisesOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [youtubeExercise, setYoutubeExercise] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([])
  const [similarEquipment, setSimilarEquipment] = useState([])
  const {id} = useParams();

  useEffect(() =>{
      const fetchExerciseData = async () =>{
          const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
          const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com' 

          const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exercisesOptions);
          setExerciseDetail(exerciseDetailData);
          const youtubeExerciseDetail = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
          setYoutubeExercise(youtubeExerciseDetail.contents);

          const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions);
          setSimilarExercises(targetMuscleExercisesData);
          
          const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions);
          setSimilarEquipment(equipmentExercisesData);
          
          
          
      }
      fetchExerciseData();
  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExercisesVideos exerciseVideos={youtubeExercise} name={exerciseDetail.name} />
      <SimilarExercises similarExercises={similarExercises} similarEquipment={similarEquipment} />
    </Box>
  )
}

export default ExerciseDetail