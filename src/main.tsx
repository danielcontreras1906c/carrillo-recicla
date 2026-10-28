import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import Participant from './Participant';
import Researcher from './Researcher';
import './style.css';
function App(){const [research,setResearch]=useState(location.hash==='#investigador');useEffect(()=>{const update=()=>setResearch(location.hash==='#investigador');window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update)},[]);return research?<Researcher/>:<Participant/>}
createRoot(document.getElementById('root')!).render(<App/>);
