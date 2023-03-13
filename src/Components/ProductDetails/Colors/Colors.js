import { useState } from 'react';


const Colors = (props) =>{
    console.log('date got ittt.........from color');
    console.log(props.colors)
  const [bgColors, setBgColors] = useState(props.colors);

  return (
    <div >
        {
            bgColors.map(bgColor => 
                {
                    const styles ={backgroundColor: bgColor?.colorCode, padding: '10px',width: '10px',
                    borderRadius: '1px solid rgba(0, 0, 0, 0.05)'};
                    return <div key={bgColor?.id+100}>
                        <div style={styles}>
                    </div>
                    <p>{bgColor.name}</p>
                    </div>
})
        }
    </div>
  );
}

export default Colors;