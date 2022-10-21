import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, name}) {
    return (
        <li className="nav-item">
            <Link href={href} className={'nav-link px-2 link-secondary'} >{name}</Link>
        </li>
    );
}
