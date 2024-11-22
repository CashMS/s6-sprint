import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState(null);
  const [allInfo, setAllInfo] = useState([]);

  

  useEffect(() => {
    const getPeople = async () => {
      try {
        const res = await fetch(urlPeople);
        const result = await res.json();
        console.log('People: ', result);
        setPeople(result);
      } catch (err) {
        console.log('People ERROR', err.message);
      }
    }
    getPeople();
  }, []);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const res = await fetch(urlPlanets);
        const result = await res.json();
        console.log('Planets: ', result);
        setPlanets(result)
      } catch (err) {
        console.log('Planets ERROR', err.message);
      }
    }
    getPlanets();
  }, []);

  const info = [];

  if (Array.isArray(people) && people.length > 0) {
    people.forEach(ppl => {

      if (Array.isArray(planets) && planets.length > 0) {
        planets.forEach(plan => {
        if (plan.id === ppl.homeworld) {
          const res1 = {id: ppl.id, name: ppl.name, homeworld_id: ppl.homeworld, homeworld: {id: plan.id, name: plan.name}};
          info.push(res1)
        }
        })
      }
    });
    console.log('Info from people: ', info);
  } else {
    console.log('No People Data :(');
  }

  

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
