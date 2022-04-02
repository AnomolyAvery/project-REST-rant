const React = require('react');
const Def = require('../default');

const Index = ({ places }) => {
    return (
        <Def title={'Places List'}>
            <main>
                <h1>Places to Rant About.</h1>
                <div className="row">
                    {places.map((place) => (
                        <div className="col-sm-6" key={place.id}>
                            <h2>
                                <a href={`/places/${place.id}`}>{place.name}</a>
                            </h2>
                            <p>{place.cuisines}</p>
                            <img
                                width={400}
                                height={300}
                                src={
                                    place.pic ??
                                    'https://via.placeholder.com/400x300'
                                }
                                alt={place.name}
                            />
                            <p>{place.picCredits}</p>
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
