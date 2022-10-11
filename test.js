import fetch from 'node-fetch';

fetch('etudiants.json')
    .then(res => res.json())
    .then((data) => console.log(data));