var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

//使用连接池链接数据库

var pool = mysql.createPool(models.mysql);

var jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

//Vue_blog接口
// 用户接口
// 增加用户接口
router.use('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  // console.log(params);
  pool.query(sql, [params.username,params.pwd,params.mobile,params.regTime,params.sex,params.headImg,params.profile], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      // console.log(results)
      jsonWrite(res, results);
    }
  })
});
//查库操作(检测用户信息)
router.use('/searchUser', (req, res) => {
  var sql = $sql.user.check;
  var params = req.body;
  // console.log(params);
  pool.query(sql, [params.id,params.username, params.pwd,params.mobile,params.regTime,params.sex,params.headImg,params.profil], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      // console.log(results)
      jsonWrite(res, results);
    }
  })
});
//修改用户信息
router.use('/editUser', (req, res) => {
  var sql = $sql.user.edit;
  var params = req.body;
  console.log(params);
  pool.query(sql, [params.username,params.pwd,params.profile,params.sex,params.mobile,params.headImg,params.regTime,params.isDelete,params.id], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      console.log(results)
      jsonWrite(res, results);
    }
  })
});
//删除用户信息
router.use('/deleteUser', (req, res) => {
  var sql = $sql.user.delete;
  var params = req.body;
  // console.log(params);
  pool.query(sql, [params.id], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      // console.log(results)
      jsonWrite(res, results);
    }
  })
});

// 文章接口
// 增加文章接口
router.use('/addArticle', (req, res) => {
  var sql = $sql.article.add;
  var params = req.body;
  // console.log(params);
  pool.query(sql, [params.title,params.content,params.categoryId,params.status,params.poster,params.createTime,params.viewTotal], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      // console.log(results)
      jsonWrite(res, results);
    }
  })
});
//查库操作(检测文章信息)
router.use('/searchArticle', (req, res) => {
  var sql = $sql.article.check;
  var params = req.body;
  // console.log(params);
  pool.query(sql, [params.id,params.title,params.content,params.categoryId,params.status,params.poster,params.createTime,params.viewTotal], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      // console.log(results)
      jsonWrite(res, results);
    }
  })
});
//删除文章信息
router.use('/deleteArticle', (req, res) => {
  var sql = $sql.article.delete;
  var params = req.body;
  // console.log(params);
  pool.query(sql, [params.id], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      // console.log(results)
      jsonWrite(res, results);
    }
  })
});

// 评论接口
// 增加评论接口
router.use('/addComment', (req, res) => {
  var sql = $sql.comment.add;
  var params = req.body;
  // console.log(params);
  pool.query(sql, [params.articleId,params.userId,params.message,params.time], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      // console.log(results)
      jsonWrite(res, results);
    }
  })
});
//查库操作(检测评论信息)
router.use('/getComment', (req, res) => {
  var sql = $sql.comment.check;
  var params = req.body;
  // console.log(params);
  pool.query(sql, [params.articleId], function(error, results, fields) {
    if (error) throw error;
    if (results) {
      // console.log(results)
      jsonWrite(res, results);
    }
  })
});

// 留言API,新建留言
router.use('/writtenInfo', (req, res) => {
    var sql = $sql.message.written;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.message,params.userId,params.time], function(error, results, fields) {
        if (error) throw error
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//留言API，获取留言列表
router.use('/messageList', (req, res) => {
    var sql = $sql.message.search;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.message_list], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});

// //发表动态API,发表动态
// router.use('/writtenDiary', (req, res) => {
//     var sql = $sql.diary.written;
//     var params = req.body;
//     console.log(params);
//     pool.query(sql, [params.diary_list, params.author, params.date], function(error, results, fields) {
//         if (error) throw error;
//         if (results) {
//             console.log(results)
//             jsonWrite(res, results);
//         }
//     })
// });
// //动态API，获取全部动态列表
// router.use('/alldiaryList', (req, res) => {
//     var sql = $sql.diary.search_all;
//     var params = req.body;
//     console.log(params);
//     pool.query(sql, [params.diary_list], function(error, results, fields) {
//         if (error) throw error;
//         if (results) {
//             console.log(results)
//             jsonWrite(res, results);
//         }
//     })
// });
// //动态API，获取个人动态列表
// router.use('/mydiaryList', (req, res) => {
//     var sql = $sql.diary.search_myself;
//     var params = req.body;
//     console.log(params);
//     pool.query(sql, [params.diary_list], function(error, results, fields) {
//         if (error) throw error;
//         if (results) {
//             console.log(results)
//             jsonWrite(res, results);
//         }
//     })
// });

module.exports = router;