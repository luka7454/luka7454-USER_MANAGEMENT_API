const jwt = require('jsonwebtoken');
const db = require('../db');
const config = require('../config');

exports.verifyEmail = async (req, res) => {
    const token = req.query.token;

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        const userId = decoded.userId;

        await db.execute('UPDATE users SET email_verified = true WHERE id = ?', [userId]);

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid or expired token' });
    }
};
