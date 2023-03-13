import React, { useState, useEffect } from "react";

const Personalize = () => {

    console.log('date got ittt.........from perso');
    console.log(props.data)
    const [options, setOptions] = useState(props.data);
    const [selectedOption, setSelectedOption] = useState("");



    function handleCheckboxChange(event) {
        setSelectedOption(event.target.value);
    }



    return (
        <div>
            {options?.map(option => (
                <label key={option?.id + 200}>
                    <input
                        type="checkbox"
                        name={option?.name}
                        value={option?.id}
                        checked={selectedOption === option.id}
                        onChange={handleCheckboxChange}
                    />
                    <div>
                        <p>{option?.title}</p>
                        <p>{option?.description}</p>
                    </div>
                </label>
            ))}
        </div>
    );
}

export default Personalize;