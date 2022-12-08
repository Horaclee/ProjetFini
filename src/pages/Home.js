import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import {Link} from "react-router-dom"
import "../App.css";



const Home = () => {
  const [filmList, setFilmList] = useState([]);
  const [filmListFiltered, setFilmListFiltered] = useState([]);

  async function getData() {
    const res = await axios.get("https://api.themoviedb.org/4/list/10?page=1&api_key=85f25a9951a9b561a28bb8b4903b3260");
    console.log("res", res.data);
    setFilmList(res.data.results);
    setFilmListFiltered(res.data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleChange(e) {
    if (!e.target.value) {
      setFilmListFiltered(filmList);
      return;
    }

    setFilmListFiltered(
      filmList.filter((film) => film.title.includes(e.target.value))
    );
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

            <li>
              <input class="nav" placeholder="search" onChange={handleChange} type="text"/>
            </li>

          </ul>
        </nav>
      </div>

    <div className="poster">
    {filmListFiltered.map((film, index) => {
    return (
      <div>
        <Link><img class="image" src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}></img></Link>
      </div>
      );
    })}
    </div>
  </div>
  )
}

export default Home;