"use client";

import QuestionCard from "./QuestionCard";

type Option = {
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  group: number;
  question: string;
  options: Option[];
};

interface TestGroupProps {
  questions: Question[];
}

export default function TestGroup({ questions }: TestGroupProps) {
  return (
    <div>
      {questions.map((q, index) => (
        <QuestionCard key={q.id} question={q} number={index + 1} />
      ))}
    </div>
  );
}
