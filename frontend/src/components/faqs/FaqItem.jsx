// react
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FaqItem = ({ question, answer, id, isActive, onToggle }) => {
  return (
    <>
      <div className="py-5">
        <p
          className={
            isActive === id
              ? "text-primary font-pt-bold flex items-center justify-between gap-10 transition-all cursor-pointer text-xl md:text-2xl"
              : "text-[#170F49] font-pt-bold flex items-center justify-between gap-10 transition-all cursor-pointer text-xl md:text-2xl"
          }
          onClick={() => onToggle(id)}
        >
          {question} {isActive === id ? <FaMinus /> : <FaPlus />}
        </p>
        <p
          className={
            isActive === id
              ? "my-4 overflow-hidden max-h-[200px] transition-all duration-300 px-3 text-[#6F6C90] text-lg"
              : "overflow-hidden max-h-0 transition-all duration-300 px-3 text-[#6F6C90] text-lg"
          }
        >
          {answer}
        </p>
      </div>
      <hr />
    </>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  id: PropTypes.number,
  isActive: PropTypes.string,
  onToggle: PropTypes.func,
};

export default FaqItem;
