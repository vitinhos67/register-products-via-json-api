module.exports = (error, request, response, next) => {
    if (error) {
        console.log(error.message);
    }

    return response.status(error.status).json({
        status: error.status,
        name: error.name,
        message: error.message,
        type: error.type,
        errors: error.errors,
    });
};
