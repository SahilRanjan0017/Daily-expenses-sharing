const User = require('../models/user');

exports.createUser = async (req, res) => {
    const { email, name, mobile } = req.body;
    try {
        const user = new User({ email, name, mobile });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUserDetails = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: 'User not found' });
    }
};
