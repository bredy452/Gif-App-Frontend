import React from 'react'
import EditForm from './EditForm'

import { Button, Modal } from 'semantic-ui-react'

export default function Edits(props) {
const [open, setOpen] = React.useState(false)

console.log(props.gif)
return (
    
<Modal onClose={()=> setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<i style={{cursor:'pointer'}}className="edit icon"></i>}>
     <Modal.Content>
         <EditForm gif={props.gif} baseUrl={props.baseUrl} name={props.name} url={props.url} getGifs={props.getGifs}/>
     </Modal.Content>
    <Modal.Actions>
        <Button color='black' onClick={()=> setOpen(false)}>
            Close
        </Button>
    </Modal.Actions>
</Modal>

)
}
