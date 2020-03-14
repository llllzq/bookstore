const appData = require('../data.json')

const proxy = {
  'GET /api/login': {
    success: appData.login.success,
    message: appData.login.message
  },
  'GET /api/book': [{
    id: 1,
    name: '人间失格1',
    // pic: '../src/pic/books/1.jpg',
    price: 25.00,
    author: '(日)太宰治',
    page: 168,
    publish: '作家出版社',
    publish_date: '2018-02-28',
    rest: 1523,
    sale: 3,
    content: '人间失格的内容简介',
    author_intro: '人间失格的作者简介',
    catalogue: '目录1 目录2'
  },
  {
    id: 2,
    name: '人间失格2',
    // pic: '../src/pic/books/2.jpg',
    price: 25.00,
    author: '(日)太宰治',
    page: 168,
    publish: '作家出版社',
    publish_date: '2018-02-28',
    rest: 1523,
    sale: 3,
    content: '人间失格的内容简介',
    author_intro: '人间失格的作者简介',
    catalogue: '目录1 目录2'
  },
  {
    id: 3,
    name: '人间失格3',
    // pic: '../src/pic/books/2.jpg',
    price: 25.00,
    author: '(日)太宰治',
    page: 168,
    publish: '作家出版社',
    publish_date: '2018-02-28',
    rest: 1523,
    sale: 3,
    content: '人间失格的内容简介',
    author_intro: '人间失格的作者简介',
    catalogue: '目录1 目录2'
  },
  {
    id: 4,
    name: '人间失格4',
    // pic: '../src/pic/books/2.jpg',
    price: 25.00,
    author: '(日)太宰治',
    page: 168,
    publish: '作家出版社',
    publish_date: '2018-02-28',
    rest: 1523,
    sale: 3,
    content: '人间失格的内容简介',
    author_intro: '人间失格的作者简介',
    catalogue: '目录1 目录2'
  }
  ],
  'POST /api/post': (req, res) => {
    res.send({
      status: 'error',
      code: 403
    })
  },
  'DELETE /api/remove': (req, res) => {
    res.send({
      status: 'ok',
      message: '删除成功！'
    })
  }
}

module.exports = proxy
