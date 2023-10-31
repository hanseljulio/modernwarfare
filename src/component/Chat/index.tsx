import React from 'react'
import {BsFillChatRightFill} from "react-icons/bs"

function Chat() {
  return (
    <div>
        <div className="outer-wrapper bg-black bg-opacity-40 py-2 pl-3  pr-2 flex items-center gap-3">
            <BsFillChatRightFill className='text-white'/>
            <input className='bg-black w-[370px] text-slate-300 text-[12px] px-2 placeholder-slate-300 py-1' placeholder='Welcome to Modern Warfare. Have fun, stay frosty.'/>
        </div>
    </div>
  )
}

export default Chat