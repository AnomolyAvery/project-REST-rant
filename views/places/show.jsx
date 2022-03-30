const React = require('react');
const Def = require('../default');

const Show = ({ place, index }) => {
    console.log(place);

    return (
        <Def>
            <main>
                <div className="container px-3 py-2 mt-2">
                    <div className="d-flex mb-4 gap-2">
                        <a
                            href={`/places/${index}/edit`}
                            className="btn btn-info"
                        >
                            Edit
                        </a>
                        <form
                            action={`/places/${index}?_method=DELETE`}
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
                                src={place.pic}
                                alt={place.name}
                            />
                        </div>
                        <div className="col-md-6">
                            <h1>{place.name}</h1>
                            <h2>Rating</h2>
                            <p>Not rated</p>
                            <h2>Description</h2>
                            <p>
                                Located in {place.city}, {place.state} and
                                serving {place.cuisines}
                            </p>
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
