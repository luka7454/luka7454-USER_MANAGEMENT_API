const db = require('../db');

exports.getUserInfo = async (req, res) => {
    const userId = req.params.id;

    try {
        const [rows] = await db.execute('SELECT id, name, username, email, email_verified FROM users WHERE id = ?', [userId]);
        const user = rows[0];

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addProgram = async (req, res) => {
    const { userId, programName, expirationDate } = req.body;

    try {
        await db.execute(
            'INSERT INTO programs (user_id, program_name, expiration_date) VALUES (?, ?, ?)',
            [userId, programName, expirationDate]
        );

        res.status(201).json({ message: 'Program added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPrograms = async (req, res) => {
    const userId = req.params.userId;

    try {
        const [rows] = await db.execute('SELECT * FROM programs WHERE user_id = ?', [userId]);

        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
