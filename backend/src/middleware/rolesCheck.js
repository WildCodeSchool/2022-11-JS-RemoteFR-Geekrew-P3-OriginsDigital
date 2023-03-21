const rolesCheck = (...rolesToCheck) => {
  return (req, res, next) => {
    const userRoles = req.admin;

    if (userRoles.some((userRole) => rolesToCheck.includes(userRole))) {
      next();
    } else {
      res.sendStatus(401);
    }
  };
};

module.exports = rolesCheck;
