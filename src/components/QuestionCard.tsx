"use client";

import { useState } from "react";

type Option = {
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
};

type Props = {
  question: Question;
  number: number;
  
};

export default function QuestionCard({ question, number }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (selected === null) {
      setSelected(index);
    }
  };

  return (
    <div className="mb-6 p-4 border rounded shadow">
      <h2 className="font-semibold mb-2">
        {number}. {question.question}
      </h2>
      <div>
        {question.options.map((option, index) => {
          let bg = "bg-black-500"; // default background
          if (selected !== null) {
            if (index === selected && !option.isCorrect) {
              bg = "bg-red-700"; // noto'g'ri javob qizil
            } else if (option.isCorrect) {
              bg = "bg-green-700"; // to'g'ri javob yashil
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`block w-full text-left px-4 py-2 mb-2 border rounded ${bg}`}
              disabled={selected !== null}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
