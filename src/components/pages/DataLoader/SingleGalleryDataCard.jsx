import PropTypes from "prop-types";
const SingleGalleryDataCard = ({ gImage }) => {
  const { toyUrl } = gImage;
  return (
    <div className="col-span-3 ">
      <img
        src={toyUrl}
        alt=""
        className="rounded-md shadow-lg object-cover w-full h-48"
      />
    </div>
  );
};

SingleGalleryDataCard.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SingleGalleryDataCard;
