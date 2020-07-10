import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layaout = ( {children} ) => (
    <div className="App">
            {children}
        <Footer />
    </div>
);

export default Layaout;