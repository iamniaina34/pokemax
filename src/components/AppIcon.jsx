import React from 'react'

function AppIcon({ size = '2rem'}) {
    return (
        <React.Fragment>
            <img
                src="/icon.png"
                alt="pokemax"
                style={{
                    width: size,
                }}
            />
        </React.Fragment>
    )
}

export default AppIcon