'use strict'


const Route = use('Route')

Route.get('/courses', 'CourseController.index');
Route.post('/courses', 'CourseController.store');


Route.get('/students', 'StudentController.index');
Route.post('/students', 'StudentController.store');
