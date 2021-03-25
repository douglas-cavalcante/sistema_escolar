'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('cpf').notNullable().unique()
      table.string('name').notNullable()
      table.string('rg')
      table.string('primary_phone_contact')
      table.string('secondary_phone_contact')
      table.enum('gender', ['M', 'F'])
      table.date('date_birth')
      table.string('cep')
      table.string('address')
      table.string('neighborhood')
      table.string('city')
      table.string('state')
      table.string('number')
      table.string('complement')
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
