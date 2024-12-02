import { useState } from "react";

const QuestionAnswer = ({ question, answer }: any) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="w-full rounded-lg border-x-2 mb-7 border-primary bg-white shadow-md">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className={
            showAnswer ? "w-full p-5 border-b border-border" : "w-full p-5"
          }
        >
          <h2 className="text-right text-heading text-lg desk:text-xl w-full">
            {question}
          </h2>
        </button>
        {showAnswer && (
          <p className="p-5 w-full text-right text-sm desk:text-base text-text">
            {answer}
          </p>
        )}
      </div>
    </>
  );
};

export default QuestionAnswer;
