import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils.js/appSlice';
import { searchIcon, YOUTUBE_SEARCH_API } from '../utils.js/constants';
import { cachedResults } from '../utils.js/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("")

  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector(store=>store.search)
  
  // searchCache={
  //   "iphone": ["iphone 14", "iphone 14 pro max"]
  // }
  
  // searchQuery = iphone
  
  useEffect(()=>{ 
    // console.log(searchQuery)
    // Make an API call after every key press
    // But if the difference between 2 api calls is <200ms
    //decline the api call
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchQuery)
      }else{
        getSearchSuggestions()
      }
    }, 200)

    return () =>{
      clearTimeout(timer)
    }
    
  }, [searchQuery])

  const getSearchSuggestions = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json()
    console.log("SEARCH SUGGESTIONS------",json)
    setSuggestions(json[1])


    //update cache
    dispatch(cachedResults({
      //iphone:[1, 2, 3]
      [searchQuery]:json[1]
    }))
  }
  
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
      dispatch(toggleMenu()) //there's no need to pass anything bcoz there's no payload as we r passing ony the state here
  }

  return (
    <div className="grid grid-flow-col pl-9 pr-9 shadow-lg items-center">
        <div className="flex col-span-1 items-center">
          <img 
            className="h-8 cursor-pointer text-white" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" 
            alt="menu"
            onClick={()=>toggleMenuHandler()} 

          />
          <img 
            className="h-20 w-30 mx-3" 
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" 
            alt="logo" 
          />
        </div>
  
  <div className="col-span-10 px-10">
    <div>
    {/* <img src={searchIcon} alt="search" className='w-8 mr-2 shadow-sm'/> */}

      <input 
        type="text" 
        className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Search"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
      />
    
    <button 
      className="bg-red-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700 transition duration-200"
    >
      Search
    </button>
    </div>
    {showSuggestions&&(<div className='border-gray-700 fixed bg-white shadow-lg px-5 py-2 w-[31rem] rounded-xl'>
        <ul>
          {suggestions.map((suggestion)=>(
            <li className='flex hover:bg-slate-200' key={suggestion}>
            <img src={searchIcon} alt="search" className='w-8 mr-2 shadow-sm'/>
            <span>{suggestion}</span>
          </li>
          ))}
        </ul>
    </div>)}
    
  </div>
  
  <div className="col-span-1 flex justify-end">
    <img 
      className="w-10 cursor-pointer" 
      src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" 
      alt="user" 
    />
  </div>
    </div>

  )
}

export default Head
