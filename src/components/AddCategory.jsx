import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ onInputSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const input = inputValue.trim()

    if (input.length >= 3){
      setInputValue("");
      onInputSubmit(input)
      return
    } 
    
  };
  

  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Busca tus gifs"
        aria-label="gifs-search-bar"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  onInputSubmit: PropTypes.func.isRequired,
};
