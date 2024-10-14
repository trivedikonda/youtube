import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { collapseSideBar } from '../utils.js/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams()
    // console.log("id",searchParams.get("v"))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(collapseSideBar())
    })

  return (
    <div className='w-full flex flex-col'>
      <div className='px-5 flex'>
        <div>
          <iframe 
            width="1000" 
            height="600" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>

          </iframe>
        </div>
        <div className='w-full'>
          <LiveChat/>
        </div>
      </div>
      <CommentsContainer/>
    </div>
    
  )
}

export default WatchPage
