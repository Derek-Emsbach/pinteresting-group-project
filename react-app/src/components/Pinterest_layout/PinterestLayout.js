import React from "react";

import Pin from './Pin.js'

function PinterestLayout() {
    return (

        <div style = {styles.pin_container}>
            <Pin size = 'small'/>
            <Pin size='medium'/>
            <Pin size ='large'/>
            <Pin size = 'small'/>
            <Pin size='medium'/>
            <Pin size ='large'/>
            <Pin size = 'small'/>
            <Pin size='medium'/>
            <Pin size ='large'/>
            <Pin size = 'small'/>
            <Pin size='medium'/>
            <Pin size ='large'/>
            <Pin size = 'small'/>
            <Pin size='medium'/>
            <Pin size ='large'/>
            <Pin size = 'small'/>
            <Pin size='medium'/>
            <Pin size ='large'/>
        
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        backgroundColor: 'white',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px'
    }
}

export default PinterestLayout