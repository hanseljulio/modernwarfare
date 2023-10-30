import React from 'react'


interface MenuBarProps {
    video: string
    title: string
    description: string
    extraStyling?: string
}

function MenuBar(props: MenuBarProps) {
  return (
    <div className='menu-bar-div-active relative flex items-center hover:cursor-pointer'>
         <video src={props.video} typeof="video/mp4" muted className='h-screen' loop autoPlay/>
        <div className={`menu-bar-content absolute ${props.title === "CAMPAIGN" ? "pt-[450px]" : props.title === "MULTIPLAYER" ? "pt-[150px]" : "pt-[500px]"} w-[450px]`}>
           <h1 className='bg-[#1A2F3B] bg-opacity-50 text-[50px] font-bold px-8 p text-[#6F8CA6]'>{props.title}</h1>
            <p className='bg-[#1A2F3B] bg-opacity-10 px-8 pb-[100px] pt-3 pl-[45px] text-white text-[14px] '><span className='mr-[100px]'>{props.description}</span></p>
            {props.title === "CAMPAIGN" ? <br /> : null}
        </div>
    </div>
  )
}

export default MenuBar