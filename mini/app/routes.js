// app/routes.js

// grab the student model we just created
var Nerd = require('./models/student');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/student', function(req, res) {
            // use mongoose to get all students in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(students); // return all students in JSON format
            });
        });


        // route to handle creating goes here (app.post)
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/Student_register', function(req, res) {
        console.log("signup again")
        // render the page and pass in any flash data if it exists
        res.render('Student_register.js', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);
    app.post('/Student_register', function(req,res){

        first_name =req.body.first_name
        last_name =req.body.last_name
        password = req.body.password 
        password_confirmation = req.body.password_confirmation
//validate the user from database 
        req.session.email = email
        res.redirect('/student_login')


    });

        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };

