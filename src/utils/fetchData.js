export const exercisesOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const reponse = await fetch(url, options);
  const data = await reponse.json();

  return data;
};
