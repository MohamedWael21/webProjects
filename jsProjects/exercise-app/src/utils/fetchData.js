export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ad9a550b82mshe73803f145adb8cp1bd8adjsn869a2426831c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}