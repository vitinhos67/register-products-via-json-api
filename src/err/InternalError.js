module.exports = class InternalError extends Error {
    constructor(message) {
        super(message);

        this.name = "BaseError";
        this.status = 500;
        this.type = "base_error";
        this.errors = [];
    }
};
