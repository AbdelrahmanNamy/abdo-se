// public/js/services/StudentService.js
angular.module('StudentService', []).factory('Student', ['$http', function($http) {

    return {
        // call to get all students
        get : function() {
            return $http.get('/api/students');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new student
        create : function(StudentData) {
            return $http.post('/api/students', StudentData);
        },

        // call to DELETE a student
        delete : function(id) {
            return $http.delete('/api/students/' + id);
        }
    }       

}]);
