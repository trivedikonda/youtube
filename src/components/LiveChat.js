import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils.js/chatSlice"
import { generateRandomMessage, generateRandomName } from "../utils.js/helpers"

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch()

  const liveMessages = useSelector(store=>store.chat.messages)
  
  useEffect(()=>{
    const i = setInterval(()=>{
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomMessage(15)
      }))

    }, 1000)


    return () => {
      clearInterval(i)
    }
  },[])




  return (
    <>
    <div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {liveMessages.map((m,i)=>
      (<ChatMessage key={i} name={m.name} message={m.message}/>)
      )}
    </div>

    <form className="w-full p-2 ml-2 border border-black flex" 
    onSubmit={(e)=>{
      e.preventDefault()
      dispatch(addMessage({
        name:"Trivedi Konda",
        message:liveMessage
      }))

      setLiveMessage("")
      }}>
      <input type="text" className="w-96" value={liveMessage} onChange={(e=>setLiveMessage(e.target.value))}/>
      <button className="px-2 mx-2 bg-green-100">Submit</button>
    </form>
    </>
  )
}

export default LiveChat
