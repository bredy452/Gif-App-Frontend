import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function Gifs(props) {
const [open, setOpen] = React.useState(false)
return (
<Modal onClose={()=> setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<img fluid src={props.gif.images.fixed_width.url} alt={props.gif.Title}></img>}
    >
    <Modal.Header>{props.gif.title}</Modal.Header>
    <Modal.Content image>
        <Image size='medium' src={props.gif.images.fixed_width.url} wrapped />
        <Modal.Description>
            <Header>Link: <a href={props.gif.bitly_gif_url}>Click Here to See it on Giphy</a></Header>
            <p>
                This is a giphy gif. Gif should be pronounced like the peanut butter.
            </p>

        </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
        <Button color='black' onClick={()=> setOpen(false)}>
            Close
        </Button>
    </Modal.Actions>
</Modal>
)
}

export default Gifs