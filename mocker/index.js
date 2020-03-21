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
  // 新接口在最下面
  'GET /api/book': [{
    id: 1,
    name: '人间失格1',
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
  // 在书本详情页把书加到购物车
  'POST /purchase/add': (req, res) => {
    res.send({
      meta: {
        status: 200,
        message: 'success'
      }
    })
  },
  'DELETE /api/remove': (req, res) => {
    res.send({
      status: 'ok',
      message: '删除成功！'
    })
  },
  // 获取购物车
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
  ],
  // 注册
  'POST /register': (req, res) => {
    res.send({
      meta: {
        status: 201,
        message: 'success'
      }
    })
  },
  // 获取书籍的新接口
  'GET /books': {
    data: {
      total: 100,
      books: [
        {
          id: 1,
          title: '计算机组成原理',
          publisher: '机械⼯业出版社',
          publish_date: '2018-02-28',
          author: 'xxx',
          price: 99.98,
          page: 168,
          count: 20,
          category: '计算机',
          content: '人间失格的内容简介',
          author_intro: '人间失格的作者简介',
          catalogue: '目录1 目录2',
          comment: [{ content: '好看', customer: 'abb' },
            { content: '好看', customer: 'ab' }]
        },
        {
          id: 2,
          title: '计算机组成原理',
          publisher: '机械⼯业出版社',
          publish_date: '2018-02-28',
          author: 'xxx',
          price: 99.98,
          page: 168,
          count: 20,
          category: '计算机',
          comment: [{ content: '好看', customer: 'abb' },
            { content: '好看', customer: 'ab' }],
          content: '人间失格的内容简介',
          author_intro: '人间失格的作者简介',
          catalogue: '目录1 目录2'
        },
        {
          id: 3,
          title: '计算机组成原理',
          publisher: '机械⼯业出版社',
          publish_date: '2018-02-28',
          author: 'xxx',
          price: 99.98,
          page: 168,
          count: 20,
          category: '计算机',
          comment: [{ content: '好看', customer: 'abb' },
            { content: '好看', customer: 'ab' }],
          content: '人间失格的内容简介',
          author_intro: '人间失格的作者简介',
          catalogue: '目录1 目录2'
        },
        {
          id: 4,
          title: '计算机组成原理',
          publisher: '机械⼯业出版社',
          publish_date: '2018-02-28',
          author: 'xxx',
          price: 99.98,
          page: 168,
          count: 20,
          category: '计算机',
          comment: [{ content: '好看', customer: 'abb' },
            { content: '好看', customer: 'ab' }],
          content: '人间失格的内容简介',
          author_intro: '人间失格的作者简介',
          catalogue: '目录1 目录2'
        }
      ]
    },
    meta: {
      status: 200,
      message: 'get book data succeed!'
    }
  },
  // 提交评论
  'POST /books/comment': {
    data: { },
    meta: {
      status: 200,
      message: 'comment success'
    }
  },
  // 购物车完成购买
  'POST /purchase/commit': {
    data: { },
    meta: {
      status: 200,
      message: 'comment success'
    }
  }
}

module.exports = proxy
