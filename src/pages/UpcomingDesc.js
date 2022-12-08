import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const UpcomingDesc = () => {
  let { id } = useParams();
  const [film, setFilm] = useState('null');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d3994bb5c3f66e144147b5e2130fc60c`);
    console.log("res", res)
    console.log("res", res.data.results);
    setFilm(res.data.results);

  }

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img class="logo" src="logocookie.png" href="http://localhost:3000/"></img>
              </Link>
            </li>

            <li>
              <a class="MovieList" href="http://localhost:3000/MaListe">Ma liste</a>
            </li>

            <li>
              <a class="MovieList" href="http://localhost:3000/popularmovie">Les plus populaires</a>
            </li>

            <li>
              <a class="MovieList" href="http://localhost:3000/toprated">Les mieux notés</a>
            </li>

            <li>
              <a class="MovieList" href="http://localhost:3000/upcoming">A venir</a>
            </li>
            
          </ul>
        </nav>
      </div>
      <div class="information">
        <p id="titre">{film[id]?.title}</p>
        <p>VO : {film[id]?.original_language}</p>
        <p>Synopsis : {film[id]?.overview}</p>
        <p>Date de sortie : {film[id]?.release_date}</p>
        <a><img class="backdrop" src={`https://image.tmdb.org/t/p/original/${film[id].backdrop_path}`}></img></a>
      </div>
    </div>
  );
};

export default UpcomingDesc;