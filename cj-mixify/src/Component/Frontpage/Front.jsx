import React, { useEffect, useState } from 'react'
import Head from './Head'
import Second from './Second'
import { Buffer } from 'buffer';
import Fifth from './fifth';
import Footer from '../footer';
import Seconds from './Seconds';
import Favorite from './Favorite';
import Loding from '../Loding';




const Front = ({show, setshow}) => {
  const [token, settoken] = useState("")
  const [id, setid] = useState("")
  const [album, setAlbum] = useState([])
  const [load, setload] = useState(true)
  const [track, setTrack] = useState([])
  const client_id ="1c58a8c6c8784ecc9a15af06a21b19b8"
  const client_secret = "8488114fa91743429e5bd9a355588bbc"
  const Gets=async()=>{
    const url = 'https://accounts.spotify.com/api/token';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials',
        json: true
    });
    if (response.ok) {
        const jsonResponse = await response.json();
        localStorage.setItem("token", jsonResponse.access_token)
        Getalbum(jsonResponse.access_token)
       
    } else {
        console.log(response.statusText);
        throw new Error(`Request failed! Status code: ${response.status} ${response.statusText}`);
    }

  }
  useEffect(()=>{
    const storedData = localStorage.getItem('myData');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        settoken(parsedData.token)
        setid(parsedData.data._id)
      }
    Gets()
  },[])
  const getTrack =async (token) =>{
    const data = await fetch(`https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy`,{
      method:'GET',
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    const info =await data.json()
    setTrack(info)
    setload(false)
  }

  const Getalbum =async(token)=>{
    const data = await fetch(`https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc`,{
      method:'GET',
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    const info =await data.json()
    setAlbum(info)
    getTrack(token)
    
  }
  return (
    <div>{
      load?
      <Loding/>
      :
      <>
        <Head/>
        {(token != "" && show) &&<Favorite  id={id} setshow={setshow}/>}
        <Second album={album}/>
        <Fifth/>
        <Seconds Datas={track}/>
        <Footer/>
        </>}
    </div>
  )
}

export default Front