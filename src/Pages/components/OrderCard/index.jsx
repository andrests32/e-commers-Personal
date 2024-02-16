import { IoMdTrash } from "react-icons/io";
import PropTypes from "prop-types";
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

const OrderCard = (props) => {
  OrderCard.propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    imageUrl: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
    handleDelete: PropTypes.node.isRequired,
  };
  const { id, title, imageUrl, price, handleDelete } = props;
  return (
    <div className="flex flex-row mb-2 mt-2 bg-color3 hover:bg-color7 rounded-lg hover:shadow-md hover:px-0.5 cursor-pointer">
      <div className="flex items-center">
        <figure className="w-20 h-20 mr-3">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
      </div>
      <div className="flex flex-col">
        <div className="w-60 h-10 mt-1.5">
          <p className="text-sm font-display">{title}</p>
        </div>

        <div className="flex flex-row items-center">
          <div className="flex items-center">
            <p className="text-lg font-medium mr-14 font-display ml-1">${price}</p>
            <div className="flex items-center mr-10">
              <FaPlusSquare className="text-color9 hover:text-color11 mr-0.5 text-xl"/>
             <FaMinusSquare className="text-color9 hover:text-color11 ml-0.5 text-xl"/>
            </div>
          </div>
          <div className="">
            <IoMdTrash className="h-6 w-6 text-color9 hover:text-color11 cursor-pointer ml-10" 
            onClick={() => handleDelete(id)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;