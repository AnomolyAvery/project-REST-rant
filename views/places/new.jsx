const React = require('react');
const Def = require('../default');

const NewForm = ({ message }) => {
    return (
        <Def title={'Add new place'}>
            <main>
                <h1>Add a New Place</h1>
                {message && (
                    <div class="alert alert-danger" role="alert">
                        {message}
                    </div>
                )}
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input
                            className="form-control"
                            type="url"
                            id="pic"
                            name="pic"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            className="form-control"
                            type="text"
                            id="city"
                            name="city"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            className="form-control"
                            type="text"
                            id="state"
                            name="state"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input
                            className="form-control"
                            type="text"
                            name="cuisines"
                            id="cuisines"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded</label>
                        <input
                            type={'number'}
                            value={new Date().getFullYear()}
                            className="form-control"
                            id="founded"
                            name="founded"
                        />
                    </div>

                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Add place"
                    />
                </form>
            </main>
        </Def>
    );
};

module.exports = NewForm;
