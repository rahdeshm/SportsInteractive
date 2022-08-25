import React from 'react';
import Childcss from '../Components/Child.css'

function Child(props) {
    const{name,skill,value,UpComingMatchCCode,UpComingMatchTSCode,matchTime,id}=props;
  return ( 
        <div className='main'>
                       <div className='imgContainer'>
                           <img className='imgStyling' src={require(`../player-images/${id}.jpg`)} alt='hirahul' />
                        </div>
                        <div className='child'>
                           <div className='name'>{name}</div>
                           <div><span>Skill :- </span> {skill}</div>
                           <div><span>Value :- </span>${value}</div>
                           { (UpComingMatchCCode &&UpComingMatchTSCode) ?
                           <div><span>Next match :- </span>{UpComingMatchCCode} vs {UpComingMatchTSCode}<span> at  </span> {matchTime}  </div>
                           :
                           <div>No upcoming match</div>
                            }
                       </div>  
         </div>        
  )
}

export default Child
