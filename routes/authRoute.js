const express = require("express");
const {
  createUser,
  loginUserCtrl,
  handleRefreshToken,
  logout,
  getAllUsers,
  getAUser,
  deleteUser,
  updateUser,
  updatePassword,
  forgotPasswordToken,
  resetPassword
} = require("../controller/authController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put('/update-password', authMiddleware, updatePassword)

router.post("/login", loginUserCtrl);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout)

router.get("/all-users", getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getAUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);


module.exports = router;