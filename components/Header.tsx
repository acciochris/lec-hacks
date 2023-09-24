const Links = () => (
  <>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#tracks">Tracks</a></li>
    <li><a href="#faqs">FAQs</a></li>
    <li><a href="#schedule">Schedule</a></li>
  </>
)

export default function Header() {
  return (
    <div className="navbar bg-zinc-900 text-gray-200 sticky top-0 z-50">
      <div className="dropdown flex-none md:hidden">
        <label tabIndex={0} className="btn m-1 bg-transparent px-0">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <Links />
        </ul>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="#">LEC Hacks</a>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <Links />
        </ul>
      </div>
    </div>
  );
}
