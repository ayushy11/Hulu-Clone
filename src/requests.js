const { REACT_APP_API_KEY } = process.env;

export default {
    fetchTrending: `/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
    fetchAction:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28`,
    fetchComedy:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35`,
    fetchHorror:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27`,
    fetchRomance:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749`,
    fetchMystery:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=9648`,
    fetchScifi:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=878`,
    fetchWestern:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=37`,
    fetchAnimation:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=16`,
    fetchTV:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10770`,
};