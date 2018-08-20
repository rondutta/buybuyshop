var router = require('express').Router();

router.post('/signup', (req, res, next) => {
    var user = new User();
    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;

    user.save((err) => {
        if (err)
            return next(err);
        res.json('Successfully created a new user');
    })
});