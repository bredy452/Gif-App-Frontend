import React from 'react'

export default function ShowGifs(props) {
	return(

		<table>
         <tbody>
           {props.newGif.map(gif => {
             return (
               <tr key={gif._id}>
                 <td>{gif.name}</td>
<<<<<<< HEAD
                 

=======
                {/*<td><a href={gif.url}></a></td>*/}
>>>>>>> 14b3fc60bb488fb09a58a4cb676f47eddaf5c099
               </tr>
             )
           })}
         </tbody>
       </table>





		)
}