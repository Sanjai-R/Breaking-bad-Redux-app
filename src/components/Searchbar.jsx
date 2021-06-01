import React,{useState} from 'react'
import '../App.css'
import {useDispatch} from 'react-redux'
import {queryAction}  from '../redux/action/index'
function Searchbar() {
   
    const dispatch = useDispatch()
    const [query,setQuery] = useState('')

    return (
        <div >
            <form>
                <input 
                type="text" 
                className="SearchBar" 
                value={query}
                placeholder="Search a characters"
                onChange={(e) =>{
                    setQuery(e.target.value);
                    e.target.value?dispatch(queryAction(query)):dispatch(queryAction(""))
                }}
                />
            </form>
        </div>
    )
}

export default Searchbar
