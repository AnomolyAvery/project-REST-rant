const React = require('react');

const Def = require('./default');

const Home = () => {
    return (
        <Def title={'Home'}>
            <main>
                <h1>HOME</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img
                                className="img-fluid"
                                src="/images/chia-fruit-drink.jpg"
                                alt="Chia Fruit Shake"
                            />
                            <p>
                                Photo by{' '}
                                <a href="AUTHOR_LINK">Brenda Godinez</a> on{' '}
                                <a href="UNSPLASH_LINK">Unsplash</a>
                            </p>
                        </div>
                    </div>
                </div>

                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    );
};

module.exports = Home;
