const Joi = require('joi')
const { getHomeHandler, addBooksHandler } = require('./handler')
const path = '/books'

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getHomeHandler
  },
  {
    method: 'POST',
    path: path,
    handler: addBooksHandler
  }
]

module.exports = routes
