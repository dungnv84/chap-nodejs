# cài mongodb express
npm install mongoose 
# định nghĩa 1 models
tạo 1  BlogPost.js nhiệm vụ  đại diện cho các Collection trong Database, rồi export module này ra 
# file test.js để tạo 1 document mongodb

const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://192.168.50.10:27017/test_my_database', { useNewUrlParser: true });

BlogPost.create({
    title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
    body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
  })
    .then(blogpost => {
      console.log(blogpost);
    })
    .catch(error => {
      console.log(error);
    });