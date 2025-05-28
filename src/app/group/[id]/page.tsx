// app/group/[id]/page.tsx

import BackToHomeButton from "@/components/BackToHome";
import TestGroup from "@/components/TestGroup";
import questions from "@/data/questions.json";
import { shuffleArray } from "@/utils/shuffle";

export default async function GroupPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const groupId = Number(resolvedParams.id);

  const filteredQuestions = questions.filter(q => q.group === groupId);

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
