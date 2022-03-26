const React = require('react');

const Def = require('./default');

const Home = () => {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img
                        className="img-fluid"
                        src="/images/chia-fruit-drink.jpg"
                        alt="Chia Fruit Shake"
                    />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on{' '}
                        <a href="UNSPLASH_LINK">Unsplash</a>
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
