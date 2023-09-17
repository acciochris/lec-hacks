import Link from "next/link";

const Intro = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <h1 className="mx-auto max-w-4xl font-display text-6xl font-bold tracking-normal text-gray-200 sm:text-7xl">
      LEC Hacks
    </h1>
    <h2 className="border border-gray-500 rounded-lg py-2 px-4 text-gray-400 text-xl sm:text-2xl my-5 transition duration-300 ease-in-out">
      $5000+ in prizes!
    </h2>
    <Link
      className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 my-1 sm:my-2 hover:bg-blue-500 transition"
      href="https://forms.gle/R5w8apgR7PnjtzPa9"
    >
      Sign Up Here
    </Link>
  </div>
);

export default Intro;
