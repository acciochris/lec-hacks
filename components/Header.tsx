import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-neutral-800 text-gray-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">LEC Hacks</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Overview</a></li>
          <li><a>Tracks</a></li>
          <li><a>FAQs</a></li>
          <li><a>Schedule</a></li>
        </ul>
      </div>
    </div>
  );
}
