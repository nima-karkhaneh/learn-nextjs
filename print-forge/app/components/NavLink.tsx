import type { NavLinkProps } from "../types";
import Link from "next/link"

export default function NavLink({ children, href, isActive }: NavLinkProps) {
    return(
        <li className="text-sm uppercase">
            <Link 
            href={href}
            className={`px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer ${isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"}`}
            >{children}</Link>
        </li>
    )
}