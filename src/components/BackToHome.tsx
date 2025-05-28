'use client';

export default function BackToHomeButton() {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <button
      onClick={handleClick}
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Bosh sahifaga qaytish
    </button>
  );
}
