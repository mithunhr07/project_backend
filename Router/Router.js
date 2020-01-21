module.exports = function(app) {
    const todoList = require('../Controller/Controller');
    const todoList3=require('../Controller/Contact_controller');
    const todoList4=require('../Controller/Billing_controller');
    const todoList5=require('../Controller/bill');
    const todoList6=require('../Controller/Email_controller');
    const todoList8=require('../Controller/Admin_controller');
     const isAuth=require('../Middleware/isAuth')
    
     app.route('/Signup')
    .get(todoList.get_a_data)
    .post(todoList.signup);

    app.route('/Signin')
    .post(todoList.userSignin,isAuth);

    
    

    app.route('/Signup/:SignupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    app.route('/Contact')
    .post(todoList3.update_a_task)
    .get(todoList3.get_a_data);

    app.route('/Billing')
    .post(todoList4.update_a_task)
    .get(todoList4.get_a_data);
   
    app.route('/Bill')
    .post(todoList5.payUMoneyPayment);

    app.route('/email')
    .post(todoList6.nodemailer1)
    
    //Desktopmodel
app.route('/Admin')
.post(todoList8.post)
.get(todoList8.list_all_tasks);

app.route('/Admin/:id')
.put(todoList8.update_a_task )
.delete(todoList8.delete_a_task);
    
  };