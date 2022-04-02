const { default: mongoose } = require('mongoose');

const connectToDatbase = () => {
    return new Promise((resolve, reject) => {
        try {
            mongoose.connect(
                process.env.MONGODB_URI,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                },
                (err) => {
                    if (err) reject(err);

                    console.log('Connected to MongoDB');
                    resolve();
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = connectToDatbase;
