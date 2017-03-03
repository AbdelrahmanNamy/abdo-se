var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/abdodb');

app.post('/Student_register', function(req, res){
    var StudentInfo = req.body; //Get the parsed information
    
        var newStudent = new Student({
            first_name: StudentInfo.first_name,
            last_name: StudentInfo.last_name,
            password: StudentInfo.password,
            password_confirmation: StudentInfo.password_confirmation
        });
        newStudent.save(function(err, res){
            if(err)
                res.render('show_message', {message: "Database error", type: "error"});
            else
                res.render('show_message', {message: "Welcome, process completed", type: "success", person: personInfo});
        });
    }
});
