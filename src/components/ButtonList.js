import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const list=["All", "API's", "Mixes", "Data Structures", "Tamil Cinema",
    "T-Series", "Databases", "Arjith Singh","News", "Live", "Recruitment", 
    "Devops", "Python", "Microsoft", "Dramedy"
  ]
  return (
    <div className='flex mt-4'>
      {list.map((button,index)=>(
        <Button name={button} key={index}/>
      ))}
    </div>
  )
}

export default ButtonList
