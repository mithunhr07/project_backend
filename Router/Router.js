module.exports = function(app) {
    const todoList = require('../Controller/Controller');
     const isAuth=require('../Middleware/isAuth')
    
   
     app.route('/Signup')
    .get(todoList.get_a_data)
    .post(todoList.signup);

    app.route('/Signin')
    .get(todoList.userSignin,isAuth);
    
    

    app.route('/Signup/:SignupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
    };