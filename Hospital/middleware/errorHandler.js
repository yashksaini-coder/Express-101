export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    if (err.name === 'ZodError') {
        return res.status(400).json({
            status: 'error',
            message: 'Validation error',
            errors: err.errors
        });
    }

    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Internal server error'
    });
};
