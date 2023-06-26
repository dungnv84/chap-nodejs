const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://admin:admin@192.168.50.10:27017/mydb?directConnection=true&authSource=admin', { useNewUrlParser: true });

// tạo dữ liệu trong mongodb 
BlogPost.create({
    title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
    body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
  })
    .then(blogpost => {
      console.log('dã tạo');
    })
    .catch(error => {
      console.log(error);
    });

// lây dữ liệu trong mongodb
BlogPost.find({ title: 'Đây là sách dạy học lập trình Node.js từ cơ bản' })
.then((blogposts) => {
  console.log(blogposts);
})
.catch((error) => {
  console.log(error);
});
  
    
// update dữ liệu trong mongodb
var id = "6497c2937171664056a23e4d"; 
BlogPost.findByIdAndUpdate(id, { title: 'Updated title' })
.then((blogposts) => {     
  console.log(blogposts);
})
.catch((error) => {
  console.log(error);
});


// Xóa một document

var id = "6497c2937171664056a23e4d"; 
BlogPost.findByIdAndDelete(id)
.then((blogposts) => {     
  console.log('đã xoa');
})
.catch((error) => {
  console.log(error);
});