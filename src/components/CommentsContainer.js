import React from 'react'


const commentsData = [
    {
        name:"Trivedi Konda",
        text: "Lorem ipsum dolor sit amet, consectetor adip",
        replies:[]
    },
    {
        name:"Trivedi Konda",
        text: "Lorem ipsum dolor sit amet, consectetor adip",
        replies:[
            {
                name:"Trivedi Konda",
                text: "Lorem ipsum dolor sit amet, consectetor adip",
                replies:[
                    {
                        name:"Trivedi Konda",
                        text: "Lorem ipsum dolor sit amet, consectetor adip",
                        replies:[
                            {
                                name:"Trivedi Konda",
                                text: "Lorem ipsum dolor sit amet, consectetor adip",
                                replies:[
                                    {
                                        name:"Trivedi Konda",
                                        text: "Lorem ipsum dolor sit amet, consectetor adip",
                                        replies:[
                                            {
                                                name:"Trivedi Konda",
                                                text: "Lorem ipsum dolor sit amet, consectetor adip",
                                                replies:[]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        name:"Trivedi Konda",
        text: "Lorem ipsum dolor sit amet, consectetor adip",
        replies:[
            {
                name:"Trivedi Konda",
                text: "Lorem ipsum dolor sit amet, consectetor adip",
                replies:[
                    
                        {
                            name:"Trivedi Konda",
                            text: "Lorem ipsum dolor sit amet, consectetor adip",
                            replies:[]
                        }
                    
                ]
            }
        ]
        
    },
    {
        name:"Trivedi Konda",
        text: "Lorem ipsum dolor sit amet, consectetor adip"
    },
]

const CommentsList = ({comments}) => {
    return comments?.map((comment, index) => (
        <div  key={index}z>
         <Comment data={comment}/>
        <div className='pl-5 border ml-5 border-l-black'>
            <CommentsList comments={comment.replies}/>
        </div>
        </div>
    ))
}

const Comment = ({data}) => {
    const {name,text,replies}=data
    return (
    <div className='flex bg-gray-200 my-2 p-2'>
        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" 
        alt="comment" className='h-8'/>

        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>)
}
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl'>Comments: </h1>
      <Comment data={commentsData[0]}/>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
