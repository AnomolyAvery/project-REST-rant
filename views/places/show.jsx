const React = require('react');
const Def = require('../default');

const Show = ({ place }) => {
    return (
        <Def title={`${place.name} - Places`}>
            <main>
                <div className="container px-3 py-2 mt-2">
                    <div className="d-flex mb-4 gap-2">
                        <a
                            href={`/places/${place.id}/edit`}
                            className="btn btn-info"
                        >
                            Edit
                        </a>
                        <form
                            action={`/places/${place.id}?_method=DELETE`}
                            method={`POST`}
                        >
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                className="img-fluid"
                                src={
                                    place.pic ??
                                    'https://via.placeholder.com/400x300'
                                }
                                alt={place.name}
                            />
                            <h3>
                                Located in {place.city}, {place.state}
                            </h3>
                        </div>
                        <div className="col-md-6">
                            <h1>{place.name}</h1>
                            <h2>Rating</h2>
                            <p>Not rated</p>
                            <h2>Description</h2>
                            <h3>{place.showEstablished()}</h3>
                            <h4>Serving {place.cuisines}</h4>
                        </div>
                        <div className="col-md-12 mt-4">
                            <h2>Comments</h2>
                            <p>No comments yet!</p>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    );
};

module.exports = Show;
