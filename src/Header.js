import React from 'react';
import SourceSelector from './SourceSelector';

const Header = ({onSourceChanged}) => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Headlines</a>
                <div className="mr-sm-2">
                    <SourceSelector onSourceChanged={onSourceChanged}/>
                </div>
            </nav>
        </header>
    )
}

export default Header;