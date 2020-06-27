import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';

 function Mycars(props) {
    return (
        
        <table className="myTab">
           {props.x.map ( Vc =>
           <tr>
              <tr>
                    <th>Mark :</th> 
                    <td >{Vc.Mark }</td>
            </tr>
            <tr>
                    <th>Color :</th> 
                    <td> {Vc.color }</td>
            </tr>
            <tr>
                    <th>Model :</th> 
                    <td>{Vc.model }</td>
             </tr>
             <tr>
                    <th>Price :</th> 
                    <td>{Vc.price }</td>
              </tr>
              <hr />
         </tr>
           )}
        </table>
        
    )
}
export default Mycars; 

 Mycars.propTypes ={
    element:PropTypes.array
}   
//    console.log(Mycars.propTypes );