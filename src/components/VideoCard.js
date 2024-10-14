import React from 'react';

const VideoCard = ({info}) => {
  // console.log(info)
  const {snippet, statistics} = info
  const {thumbnails, channelTitle, title} = snippet
  return (
    <div className='w-72 shadow-lg p-2 m-2'>
      <img src={thumbnails?.medium?.url} alt="thumbnail" className='rounded-lg'/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
