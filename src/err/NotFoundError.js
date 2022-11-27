module.exports = class NotFoundError extends Error {
    constructor(message) {
        super(message);

        this.name = "NotFoundError";
        this.status = 404;
        this.type = "not_found";
        this.errors = [];
    }
};
