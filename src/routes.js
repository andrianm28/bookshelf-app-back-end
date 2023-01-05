const Joi = require('joi')
const {
  getHomeHandler,
  addBooksHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  editBooksByIdHandler
} = require('./handler')
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
  },
  {
    method: 'GET',
    path: path,
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: `${path}/{id}`,
    handler: getBooksByIdHandler
  },
  {
    method: 'PUT',
    path: `${path}/{id}`,
    handler: editBooksByIdHandler
  }
]

module.exports = routes
