const React = require('react');
const Def = require('../default');

const Index = ({ places }) => {
    return (
        <Def>
            <main>
                <h1>Index page for places dir.</h1>

                {places.map((place, i) => (
                    <div key={i}>
                        <h2>{place.name}</h2>
                        <img src={place.pic} alt={place.name} />
                    </div>
                ))}
            </main>
        </Def>
    );
};

module.exports = Index;
