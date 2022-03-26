const React = require('react');
const Def = require('../default');

const Index = ({ places }) => {
    return (
        <Def>
            <main>
                <h1>Places to Rant About.</h1>
                <div className="row">
                    {places.map((place, i) => (
                        <div className="col-sm-6" key={i}>
                            <h2>{place.name}</h2>
                            <p>{place.cuisines}</p>
                            <img src={place.pic} alt={place.name} />
                            <p>
                                Located in {place.city}, {place.state}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </Def>
    );
};

module.exports = Index;
