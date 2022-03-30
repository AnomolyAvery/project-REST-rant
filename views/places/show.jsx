const React = require('react');
const Def = require('../default');

const Show = ({ place }) => {
    console.log(place);
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
            </main>
        </Def>
    );
};

module.exports = Show;
