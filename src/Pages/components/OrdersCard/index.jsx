import PropTypes from "prop-types";
import { CiCalendarDate } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const OrdersCard = (props) => {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired
  };

  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center border border-color9 w-80 rounded-lg p-4 mb-4 bg-color10 hover:bg-color7">
      <p className="flex flex-col justify-between w-full">
        <div className="flex items-center">
          <CiCalendarDate className="text-3xl mr-2 mb-2" />
          <span>01.02.24</span>
        </div>
        <div className="flex flex-row items-center">
          <IoBagCheckOutline className="text-3xl mr-2 mt-3" />
          <span>{totalProducts}</span>
        </div>
      </p>
      <div className="flex flex-col items-center p-1">
        <FaSackDollar className="text-xl mr-1 text-color11 mb-1" />
        <span className="text-xl">${totalPrice}</span>
      </div>
      <div>
        <FaChevronRight className="text-3xl hover:text-color11"/>
      </div>
    </div>
  );
};

export default OrdersCard;
