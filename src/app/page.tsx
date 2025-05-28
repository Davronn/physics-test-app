'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const startRealTest = () => {
    router.push("/real-test");
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-6">Fizika fanidan testlar</h1>
      <p className="mb-4">Quyidagi guruhlardan birini tanlang:</p>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
        {[1, 2, 3, 4].map((id) => (
          <Link
            key={id}
            href={`/group/${id}`}
            className="block py-4 px-6 bg-blue-800 text-white rounded shadow hover:bg-blue-700"
          >
            Guruh {id}
          </Link>
        ))}
      </div>

      <button
        onClick={startRealTest}
        className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 transition"
      >
        Haqiqiy testni boshlash
      </button>
    </div>
  );
}
