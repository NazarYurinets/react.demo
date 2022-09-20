import {useState, useEffect} from "react";
import axios from 'axios';
import Rocket from "./Rocket";
import './Rockets'


const baseUrl = 'https://api.spacexdata.com/v3/launches';

function Rockets(){
    let [rockets, setLaunches] = useState([]);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setLaunches(response.data);
        });
    },[]);


    return(
        <div className={'styles'}>{
            rockets.filter(value => value.launch_year !=='2020').map(((value=>(<Rocket item={value} key ={value.id}/>))))
        }</div>
    );
}

export default Rockets;