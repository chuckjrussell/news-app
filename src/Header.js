import React from 'react';
import SourceSelector from './SourceSelector';

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">News App!</a>
                <div class="mr-sm-2">
                    <SourceSelector/>
                </div>
            </nav>
        </header>
    )
}

export default Header;