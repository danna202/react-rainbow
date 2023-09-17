
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';  // Updated correct casing
import ColorForm from './ColorForm';  // Updated correct casing

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    return (
        <div className="App">
            {colorMap}
            <ColorForm />
        </div>
    )
}



export default App;
