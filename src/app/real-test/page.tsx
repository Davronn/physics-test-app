// app/real-test/page.tsx

import TestGroup from "@/components/TestGroup";
import questions from "@/data/questions.json";
import { shuffleArray } from "@/utils/shuffle";
import BackToHomeButton from "@/components/BackToHome";

export default function RealTestPage() {
  const shuffledQuestions = shuffleArray(questions)
    .slice(0, 25)
    .map(q => ({
      ...q,
      options: shuffleArray(q.options),
    }));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Haqiqiy test — 25 ta savol</h1>
      <TestGroup questions={shuffledQuestions} />
      <BackToHomeButton />
    </div>
  );
}

