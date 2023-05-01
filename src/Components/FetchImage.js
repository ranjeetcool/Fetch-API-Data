import React, { useEffect, useState } from 'react'

function FetchImage() {
    const [imgs,setImgs]= useState([])
    const fetchImgData=()=> fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(res=>res.json())
    .then(imgDatas=>setImgs(imgDatas))
    console.log(imgs)
    useEffect(()=>{fetchImgData()},[])
  return (
    <>
    {imgs.map((img)=>(
        <div key={img.id}>
            <div>{img.id}</div>
            <img src={img.thumbnailUrl} alt='photos'></img>
        </div>
    ))}
    
    </>
  )
}

export default FetchImage