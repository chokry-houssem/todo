import React from 'react';
import propTypes from 'prop-types';
import '../App.css';
const user = (props) =>{
    console.log(props);

    alert(props.x.fullName);
    return (
        <div> 
               <p className="Name">Name :<span> {props.x.fullName}</span> </p>
               <p className="bio">Bio : <span>{props.x.bio}</span></p>
               <p className="Profession"> Profession : <span>{props.x. profession}</span></p>
               <img src={props.x.image}/>
        </div>
    )

}

export default user ;

user.propTypes ={
    Type :propTypes.object
  }