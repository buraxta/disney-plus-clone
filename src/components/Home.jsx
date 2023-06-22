import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';


const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {      
      const fetch = require('node-fetch');

      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTlkMGFjMmI4NmI4ZDEyZjg1ODVmNzc2MDIxZWQwMyIsInN1YiI6IjY0OTJkZGJlNGJhNTIyMDBmZjAxNTgyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hVtSLLde3kbTNwEdC20mjxOWcPefS6LFDLgH1I22IjU'
        }
      };
      
      fetch(url, options)
        .then(res => res.json())
        // .then(json => console.log(json.results))
        .then(json => {
          let movieArray = [];
          json.results.forEach(movie => {
            movieArray.push(movie);
          });
          dispatch(setMovies(movieArray));
        })
        .catch(err => console.error('error:' + err));  
      // await fetch('https://dummyapi.online/api/blogposts')
        //   .then(response => response.json())
        //   .then(json => {
        //     let movieArray = [];
        //     json.forEach(movie => {
        //       movieArray.push(movie);
        //     });
        //     dispatch(setMovies(movieArray));
        //   })
        }
    getData();
  }, [])

  return (
    <Container>
      <ImgSlider/>
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

`