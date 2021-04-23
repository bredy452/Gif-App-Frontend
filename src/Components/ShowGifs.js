import React from 'react'
import Delete from './Delete'
import Edit from './Edit'
import { Divider, Image, Card, Icon, Grid } from 'semantic-ui-react'

export default function ShowGifs(props) {
  console.log(props.baseUrl)
  console.log(props.newGif)


	return(


		<div className="flex">
           {props.newGif.map(gif => {
             return (
              <Card.Group key={gif._id}>
              <Card>
                
                <Image src={gif.url} size='medium' >
                  </Image>
              
                <Card.Content>
                  <Card.Header>{gif.name}</Card.Header>
                  <Card.Description>
                  {gif.description}
                  </Card.Description>

                  <Delete gif={gif._id} baseUrl={props.baseUrl} getGifs={props.getGifs} />
                  <Edit gif={gif}  baseUrl={props.baseUrl} getGifs={props.getGifs}/>
                </Card.Content>
              </Card>
              </Card.Group>
    
             )
           })}
        
       </div>





		)
}
