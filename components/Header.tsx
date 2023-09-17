import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-zinc-900 text-gray-200 sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">LEC Hacks</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="#overview">Overview</Link></li>
          <li><Link href="#tracks">Tracks</Link></li>
          <li><Link href="#faqs">FAQs</Link></li>
          <li><Link href="#schedule">Schedule</Link></li>
        </ul>
      </div>
    </div>
  );
}
