import React, { useEffect, useState } from 'react';
import axios from 'axios';
import view from '../Components/View.css';
import Child from './Child';

function View() {
   const [teams,setTeams]= useState(null);
   let [palyers,setPlayers]= useState([]);
   const [name,setName]=useState(null);
   useEffect(()=>{
      axios.get('https://api.npoint.io/20c1afef1661881ddc9c').then((response)=>{
    //   console.log(response) 
      setTeams(response.data.teamsList);
      setPlayers(response.data.playerList);     
      })
   },[]);
  
    function debounce(func,delay){
      let timer;
      return function(e){
          clearTimeout(timer)
          timer=setTimeout(()=>{
             func.call(this,e.target.value)
          },delay)
       }   
  };  

    function matchFunc(value){
         let arr=[];
         console.log(value);
         arr =palyers.filter((e)=>{
              return  e.PFName.toLowerCase().includes(value.toLowerCase())
            })
            // console.log(palyers)
            setName(arr) 
       };
  let betterFunc=debounce(matchFunc,1000);

  return (
    <div className='parent'>
         <div className='imgClass'>
          <input className='inputClass'  type='text' onKeyUp={(e)=>{betterFunc(e)}}></input>   
         </div>
          <div className='playerCard'>
            {
             name?
             name.map((palyer)=>{
             let abc=new Date(palyer.UpComingMatchesList[0].MDate);
             var date = new Date(`${palyer.UpComingMatchesList[0].MDate} UTC`);
                return <Child 
               id={palyer.Id} 
               name={palyer.PFName}
               skill={palyer.SkillDesc}
               value={palyer.Value}
               UpComingMatchCCode={palyer.UpComingMatchesList[0].CCode}
               UpComingMatchTSCode={palyer.UpComingMatchesList[0].TSCode}  
               matchTime={date.toString() } 
               />
           }): <>{      
            palyers?        
            palyers.sort((a,b)=>b.Value-a.Value ).map((palyer)=>{
              var date = new Date(`${palyer.UpComingMatchesList[0].MDate} UTC`);
              return <Child     
                id={palyer.Id}        
                name={palyer.PFName}
                skill={palyer.SkillDesc}
                value={palyer.Value}
                UpComingMatchCCode={palyer.UpComingMatchesList[0].CCode}
                UpComingMatchTSCode={palyer.UpComingMatchesList[0].TSCode}   
                matchTime={date.toString() } 
                />
            }): true
        }
        </>
            }</div>      
    </div>
  ) }
export default View