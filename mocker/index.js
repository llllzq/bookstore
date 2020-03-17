// const appData = require('../data.json')

const proxy = {
  'POST /api/login': (req, res) => {
    res.send({
      id: 1,
      username: 'admin',
      status: 'success',
      code: 200
    })
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
  'POST /api/addgoods': (req, res) => {
    res.send({
      status: 'success',
      code: 200
    })
  },
  'POST /api/post': (req, res) => {
    res.send({
      status: 'success',
      code: 200
    })
  },
  'DELETE /api/remove': (req, res) => {
    res.send({
      status: 'ok',
      message: '删除成功！'
    })
  },
  // 购物车
  'GET /api/cart': [
    {
      cus_id: 1, // 用户编号
      book_id: 1, // 书编号
      order_mount: 1, // 订购数量
      buy: 0
    },
    {
      cus_id: 1,
      book_id: 2,
      order_mount: 1,
      buy: 0
    }
  ]
}

module.exports = proxy
