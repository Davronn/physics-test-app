// app/group/[id]/page.tsx

import BackToHomeButton from "@/components/BackToHome";
import TestGroup from "@/components/TestGroup";
import  questions  from "@/data/questions.json";
import { shuffleArray } from "@/utils/shuffle";


export default function GroupPage({ params }: { params: { id: string } }) {
  const groupId = Number(params.id);

  // Guruhga oid savollarni filtrlaymiz
  const filteredQuestions = questions.filter(q => q.group === groupId);

  // Har bir savolning optionsini aralashtirish uchun yangi array yaratamiz
  const shuffledQuestions = shuffleArray(filteredQuestions)
    .slice(0, 50)
    .map(q => ({
      ...q,
      options: shuffleArray(q.options),
    }));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Guruh {groupId} uchun test</h1>
      <TestGroup questions={shuffledQuestions} />
      <BackToHomeButton />
    </div>
  );
}
