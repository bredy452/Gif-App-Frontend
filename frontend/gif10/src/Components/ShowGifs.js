import React from 'react'

export default function ShowGifs(props) {
	return(

		<table>
         <tbody>
           {props.newGif.map(gif => {
             return (
               <tr key={gif._id}>
                 <td>{gif.name}</td>
                 

               </tr>
             )
           })}
         </tbody>
       </table>





		)
}