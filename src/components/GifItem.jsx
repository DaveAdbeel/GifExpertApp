import PropTypes from 'prop-types'
const GifItem = ({ title, url }) => {
  return (
    <li className='card'>
      <img src={url} alt={title} />
      <p data-testid="gif-title">{title}</p>
    </li>
  );
};

export default GifItem;


GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}