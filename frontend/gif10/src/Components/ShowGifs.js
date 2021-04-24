import React from 'react'
import Delete from './Delete'
import Edit from './Edit'
import { Divider, Image, Card, Icon, Grid } from 'semantic-ui-react'

export default function ShowGifs(props) {
  console.log(props.baseUrl)
  console.log(props.newGif)


	return(


		<div className="flex u-full-width gif--list">
           {props.newGif.map(gif => {
             return (
              <Card.Group>
              <Card key={gif._id} >
                
                <Image src={gif.url} size='medium' >
                  </Image>
              
                <Card.Content>
                  <Card.Header>{gif.name}</Card.Header>
                  <Card.Description>
                  {gif.description}
                  </Card.Description>

                  <div className='card--actions'>
                    <Delete gif={gif._id} baseUrl={props.baseUrl} getGifs={props.getGifs} />
                    <Edit gif={gif}  baseUrl={props.baseUrl} getGifs={props.getGifs}/>
                  </div>
                </Card.Content>
              </Card>
              </Card.Group>
    
             )
           })}
        
       </div>





		)
}