import Link from "next/link";

export function Titulo() {
  return (
    <nav className="bg-blue-400 border-gray-200 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="/principal"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./gado.webp" className="h-16" alt="Fusca" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            Revenda Biduca: Admin
          </span>
        </Link>
      </div>
    </nav>
  );
}
