import React from 'react'

// function Greet() {
//     return <h1>Hello Boti</h1>
// }

// const Greet = () => <h1>Hello Boti</h1>

export const Greet = props => {
    console.log(props);
    const {name,heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}
