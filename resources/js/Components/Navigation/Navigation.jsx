import NavLink from '@/Components/Navigation/Nav/NavLink';
import React, { useState } from 'react';

export default function Navigation({auth,}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <nav className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <NavLink href={route('dashboard')} name={'Dashboard'} />
                    <NavLink href={route('articles')} name={'Articles'} />
                </ul>
            </header>
        </nav>
    );
}
