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

    if (input.length >= 3)
      onInputSubmit(input)
      setInputValue("");
  };
  

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Busca tus gifs"
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
