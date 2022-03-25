const React = require('react');

const Def = require('./default');

const Error = () => {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry, we can't find that page!</p>
            </main>
        </Def>
    );
};

module.exports = Error;
