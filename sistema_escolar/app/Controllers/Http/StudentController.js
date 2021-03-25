'use strict'

const Student = use('App/Models/Student')

class StudentController {

  async index() {
    const students = Student.all()
    return students;
  }

  async store({ request }) {
    const data = request.only([
      'cpf',
      'name',
      'rg',
      'primary_phone_contact',
      'secondary_phone_contact',
      'gender',
      'date_birth',
      'cep',
      'address',
      'neighborhood',
      'city',
      'state',
      'number',
      'complement',
      'father_name',
      'mother_name',
      'email'
    ]);

    const student = await Student.create(data);
    return student;
  }

  async show({ params, response }) {
    try {
      const student = await Student.findOrFail(params.id)
      return student
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Student não encontrado' } })
    }
  }

  async update({ params, request, response }) {
    try {
      const student = await Student.findOrFail(params.id)
      const data = request.only([
        'cpf',
        'name',
        'rg',
        'primary_phone_contact',
        'secondary_phone_contact',
        'gender',
        'date_birth',
        'cep',
        'address',
        'neighborhood',
        'city',
        'state',
        'number',
        'complement',
        'father_name',
        'mother_name',
        'email'
      ]);

      student.merge(data)
      student.save()

      return student
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'student nao encontrado' } })
    }
  }
}

module.exports = StudentController
