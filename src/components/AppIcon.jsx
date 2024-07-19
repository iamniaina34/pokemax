import React from 'react';

function AppIcon({ size = '2rem', onMouseEnter = () => {}, onMouseLeave = () => {} }) {
    return (
        <React.Fragment>
            <img
                src="/icon.png"
                alt="pokemax"
                style={{
                    width: size,
                    transition: 'transform 0.1s ease-in-out',
                    cursor: 'pointer',
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        </React.Fragment>
    );
}

export default AppIcon;
