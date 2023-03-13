import React, { useState } from 'react';

const Option = () => {


  const [selectedOption, setSelectedOption] = useState("");



  function handleCheckboxChange(event) {
    setSelectedOption(event.target.value);
  }



  return (
    <div>
      {console.log(Option)}
      {Option?.map(option => (

        <label key={option?.id}>
          <input
            type="checkbox"
            name={option?.name}
            value={option?.id}
            checked={selectedOption === option?.id}
            onChange={handleCheckboxChange}
          />
          {option.size}
        </label>
      ))}
    </div>
  );
}

export default Option;