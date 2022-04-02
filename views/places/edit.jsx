const React = require('react');
const Def = require('../default');

const EditForm = ({ place }) => {
    return (
        <Def title={`Edit ${place.name}`}>
            <main>
                <div className="container px-3 py-2 mt-2">
                    <h1>Edit place</h1>
                    <form
                        method="POST"
                        action={`/places/${place.id}?_method=PUT`}
                    >
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="name">Place Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    defaultValue={place.name}
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="name">Place Picture</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="pic"
                                    name="pic"
                                    defaultValue={place.pic}
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="name">City</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="city"
                                    name="city"
                                    defaultValue={place.city}
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="name">State</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="state"
                                    name="state"
                                    defaultValue={place.state}
                                />
                            </div>
                            <div className="form-group col-sm-12">
                                <label htmlFor="name">Cuisines</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="cuisines"
                                    name="cuisines"
                                    defaultValue={place.cuisines}
                                />
                            </div>
                            <div className="form-group col-sm-12">
                                <label htmlFor="founded">Founded</label>
                                <input
                                    className="form-control"
                                    id="founded"
                                    name="founded"
                                    defaultValue={place.founded}
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </Def>
    );
};

module.exports = EditForm;
