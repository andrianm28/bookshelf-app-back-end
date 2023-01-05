const { nanoid } = require('nanoid')
const books = require('./books')

const getHomeHandler = (request, h) => {
  const response = h.response({
    status: 'success',
    message: 'welcome to bookshelf api app'
  })
  response.code(200)
  return response
}

const addBooksHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading
  } = request.payload

  const id = nanoid(16)
  let finished = false
  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt

  const newBooks = {
    id,
    name,
    year,
    author,
    summary, 
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt
  }

  books.push(newBooks)
  const isSuccess = books.filter((book) => book.id === id).length > 0

  if (name === undefined || name === "") {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    })
    response.code(400)
    return response
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    })
    response.code(400)
    return response
  }

  if ( readPage == pageCount ) {
    finished = true
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })
    response.code(201)
    return response

  }

  if (!isSuccess) {
    const response = h.response({
      status: 'error',
      message: 'Buku gagal ditambahkan'
    })
    response.code(500)
    return response
  }

  const response = h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id
    }
  })
  response.code(201)
  return response
}

module.exports = { getHomeHandler, addBooksHandler }
