var login_name = 'adj'
    // sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(username,password,mobile,isDelete,regTime,sex,headImg,profile) values (?,?,?,1,?,?,?,?)',
    check: 'select id,username,password,mobile,isDelete,regTime,sex,headImg,profile from user',
    edit: 'update user set username =?,password =?,profile =?,sex =?, mobile =?,headImg =?,regTime =?,isDelete =? where id=?',
    delete: 'delete from user where id=?',
  },
  article: {
    add: 'insert into article(title,content,categoryId,status,poster,createTime,viewTotal) value (?,?,?,?,PUBLISHED,?,?,?)',
    check: 'select id,title,content,categoryId,status,poster,createTime,viewTotal from article',
    delete: 'delete from article where id=?'
  },
  comment: {
    add: 'insert into comment(articleId,userId,message,time) value (?,?,?,?)',
    check: 'select articleId,userId,message,time from comment',
  },
  message: {
      written: 'insert into message(message,userId,time) values (?,?,?)',
      search: 'select message,userId,time from message'
  },
    // diary: {
    //     written: 'insert into diary_board(diary_list, author, date) values (?,?,?)',
    //     search_myself: "select * from diary_board where author='" + login_name + "'",
    //     search_all: 'select * from diary_board'
    // },
    // comment: {
    //     written: 'insert into comment(userid, msg_id, comment_message, create_time) values (?,?,?,?)',
    //     search: 'select userid, msg_id, comment_message, create_time from comment'
    // }
}
module.exports = sqlMap;