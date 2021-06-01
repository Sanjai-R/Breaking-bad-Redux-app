import React,{useState} from 'react'
import '../App.css'
import {useDispatch,useSelector} from 'react-redux'
import {queryAction}  from '../redux/action/index'
function Searchbar() {
    const Query = useSelector((state) => state.query)
    const dispatch = useDispatch()
    const [query,setQuery] = useState('')

    return (
        <div >
            <form>
                <input 
                type="text" 
                className="SearchBar" 
                placeholder="Search a character"
                value={query}
                onChange={(e) =>{
                    setQuery(e.target.value);
                    dispatch(queryAction(e.target.value))
                }}

                />
            </form>
        </div>
    )
}

export default Searchbar
