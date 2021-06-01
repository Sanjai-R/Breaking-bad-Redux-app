import React from "react";
import { useEffect} from "react";
import fetchapi from "../api/index";
import {charactersaction} from '../redux/action/index'
import {useDispatch,useSelector} from "react-redux"
import Charactercard from "./Card-list"
import  './Card.css'
function Characters() {
  const  query = useSelector((state) => state.query)
  const dispatch = useDispatch();
  const Character = useSelector((state) => state.characters)
  useEffect(() => {
    fetchapi(query).then((data) => {
      dispatch(charactersaction(data));
      
    });
    
  }, [query,dispatch]);
  return (
    <div className="cards">
        {Character.map((item,i)=>{
          return(
          
            <Charactercard item={item} key={i}/>
          )
        })}
 </div>
  );
}

export default Characters;
