const defaultDetails = {
  message: "Invalid Credentials !",
};

class CredentialsError extends Error {
  constructor(details = defaultDetails) {
    super();
    this.statusCode = 401;
    this.details = details;
  }
}

module.exports = { CredentialsError };
