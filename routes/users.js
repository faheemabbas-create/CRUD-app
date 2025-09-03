const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/', async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'name and email are required' });
    const user = new User({ name, email , age});
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    
    if (err.code === 11000) return res.status(409).json({ error: 'Email already exists' });
    next(err);
  }
});


router.get('/', async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) { next(err); }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    const updates = {};
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (age) updates.age = age;
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ error: 'Email already exists' });
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted', user });
  } catch (err) { next(err); }
});

module.exports = router;
