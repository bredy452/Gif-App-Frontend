import React from 'react'
import Delete from './Delete'
import Edit from './Edit'
import { Divider, Image } from 'semantic-ui-react'

export default function ShowGifs(props) {
	return(

		<table>
         <tbody>
           {props.newGif.map(gif => {
             return (
               <tr key={gif._id}>
                 <td>{gif.name}</td>
                 <td><Image src={gif.url} size='medium'></Image></td>
                 <Delete newGif={props.gifs} baseUrl={props.baseUrl} getGifs={props.getGifs} />
                 <Edit newGif={props.gifs} baseUrl={props.baseUrl} getGifs={props.getGifs}/> 


                {/*<td><a href={gif.url}></a></td>*/}

               </tr>
             )
           })}
         </tbody>
       </table>





		)
}