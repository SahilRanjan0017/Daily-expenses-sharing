// Authentication middleware can be implemented here
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied.');

    try {
        const verified = jwt.verify(token, 'your_jwt_secret'); // Replace with your secret
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
    }
};

module.exports = auth;
