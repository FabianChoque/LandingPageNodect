import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const QuestionBox = ({id, question, ask, }) => {

    const [showAnswer, setShowAnswer] = useState(false);
    
  return (
    <div className=''>
        <div className="bg-gray-700 rounded-md">
            <button 
                type="button" 
                onClick={() => setShowAnswer(!showAnswer)}
                className="inline-flex items-center justify-between w-full px-5 py-4 text-lg font-semibold text-white rounded-md shadow-sm md:px-10 bg-bgbody ring-1 ring-inset ring-primary hover:bg-bgbodydark" id="menu-button">
                <p className="text-left">{question}</p>
                <RiArrowDropDownLine className="text-3xl font-semibold text-primary"/>
            </button>
            <div className={`px-5 md:px-10 bg-gray-700 rounded-md ${showAnswer ? "block":"hidden"} transition-all duration-800`}>
                <p className="py-4 text-white">{ask}</p>
            </div>
        </div>
        {/* {showAnswer ? <IoClose /> : <IoMenu />} */}
    </div>
  )
}

export default QuestionBox