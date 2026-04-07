const allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    let role = req.user?.role;
    console.log("User role:", role);
    if (!role) {
      return res.status(401).json({ message: "Unauthorized: No role found" });
    }

    role = role.trim().toLowerCase();

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({
        message: "Forbidden: You do not have access",
      });
    }

    next();
  };
};

module.exports = allowRoles;