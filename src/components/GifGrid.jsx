import PropTypes from "prop-types";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <h1>Cargando...</h1>}
        {gifs.length === 0 ? (
          <h1>No hay gifs</h1>
        ) : (
          gifs.map((gif) => <GifItem key={gif.id} {...gif} />)
        )}
      </div>
    </>
  );
};

export default GifGrid;

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
