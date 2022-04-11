const React = require('react');
const Def = require('../default');

const Show = ({ place }) => {
    let comments = <div className="inactive">No comments yet!</div>;
    let rating = <div className="inactive">No ratings yet!</div>;

    if (place.comments.length > 0) {
        comments = place.comments.map((comment, index) => {
            return (
                <div key={index} className="border">
                    <h2 className="rant">{comment.rant ? 'Rant' : 'Raye!'}</h2>
                    <h4>{comment.content}</h4>
                    <h3>
                        <strong>- {comment.author}</strong>
                    </h3>
                    {/* Display star emoji for number of stars */}
                    <h4>Rating: {comment.stars}</h4>
                </div>
            );
        });

        // Get the sum of all stars and divide by the number of comments
        let sum = place.comments.reduce((acc, curr) => {
            return acc + curr.stars;
        }, 0);
        let avg = Math.round(sum / place.comments.length);
        let stars = '';
        for (let i = 0; i < avg; i++) {
            stars += '⭐';
        }

        rating = <h3>{stars} stars</h3>;
    }

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
                            {rating}
                            <br />
                            <h2>Description</h2>
                            <h3>{place.showEstablished()}</h3>
                            <h4>Serving {place.cuisines}</h4>
                        </div>
                        <div className="col-md-12 mt-4">
                            <h2>Comments</h2>
                            {comments}
                            <div className="">
                                <form
                                    method="POST"
                                    action={`/places/${place._id}/comment`}
                                >
                                    <div className="form-group">
                                        <label htmlFor="rant">
                                            Rant or Raye?
                                        </label>
                                        <select
                                            className="form-control"
                                            id="rant"
                                            name="rant"
                                        >
                                            <option value={true}>Rant</option>
                                            <option value={false}>Raye</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="author">Author</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="author"
                                            name="author"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="content">Comment</label>
                                        <textarea
                                            name="content"
                                            className="form-control"
                                            id="content"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="stars">Rating</label>
                                        <select
                                            name="stars"
                                            className="form-control"
                                            id="stars"
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    );
};

module.exports = Show;
