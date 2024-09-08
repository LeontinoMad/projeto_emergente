import Link from "next/link";

export function Header() {
  return (
    <nav className="bg-gray-600 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse  ml-20"
        >
          <img src="./gado.webp" className="h-16" alt="Logo" />
          <span className="mr-11 text-4xl font-bold whitespace-nowrap ">
            Revenda de Gado Biduca
          </span>
        </Link>

        <div className="flex items-center space-x-6 rtl:space-x-reverse mr-24">
          <span className="text-gray-200 dark:text-gray-300 hover:underline">
            <span className="text-white-300 dark:text-white-500">
              (identifique-se)
            </span>
          </span>
          <Link
            href="/login"
            className="font-bold text-gray-200 dark:text-gray-800 hover:underline"
          >
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}
