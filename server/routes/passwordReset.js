const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Replace with your user model

// POST /api/reset-password
router.post('/api/resetpassword', async (req, res) => {
  const { newPassword } = req.body;

  // Add validation here if needed (e.g., check newPassword format)

  try {
    // Find user by token or any other identifier if needed
    const user = await User.findOne({ resetPasswordToken: req.body.token });

    if (!user) {
      return res.status(404).json({ message: 'User not found or token expired' });
    }

    // Update user's password
    user.password = newPassword;
    user.resetPasswordToken = undefined; // Clear token if necessary
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ message: 'Failed to reset password' });
  }
});

module.exports = router;
