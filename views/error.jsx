const React = require('react');

const Def = require('./default');

const Error = () => {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry, we can't find that page!</p>
                <img
                    src="/images/bart-simpson-404.gif"
                    alt="Bart Simpson Try Again"
                />
                <a href="https://tenor.com/view/bart-simpson-the-simpsons-at-least-you-tried-fail-failure-gif-7859548">
                    Bart Simpson The Simpsons GIF
                </a>
                from{' '}
                <a href="https://tenor.com/search/bart+simpson-gifs">
                    Bart Simpson GIFs
                </a>
            </main>
        </Def>
    );
};

module.exports = Error;
