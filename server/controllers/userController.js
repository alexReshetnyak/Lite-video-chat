    var UserModel  = require("../../server/models/userItem");

    function handleError(res, error) {
        res.statusCode = 500;
        log.error('Internal error(%d): %s',res.statusCode,error.message);
        return res.send({ error: 'Server error' });
    }


    var userController = {

      testApi: function (req, res) {
        res.send('{"result": "User API is running. You can work."}');
      },

      getUsersList: function (req, res) {
        console.log('getUsersList');
        UserModel.find(function (err, usersList) {
            if (!err) {
                res.send(usersList);
            } else {
                handleError(res, err); 
            }
        });
      },

      getUserByName: function (req, res) {

          UserModel.find({ name: req.params.name})
          .exec(function (err, user) {
            if (!err) {
                return res.send(user);
            } else {
                handleError(res, err); 
            }
        });
      },

      authenticateUser: function (req, res) {
        UserModel.find({ name: req.body.name})
        .exec(function (err, user) {
          if (!err) {
              if(user.length > 0 && user[0].password  === req.body.password){
                return res.send(user);
              }else{
                return res.send([]);
              }
          } else {
              handleError(res, err); 
          }
        });
      },

      getUserFriendByName(req, res) {
        UserModel.find({ name: req.params.name})
        .exec(function (err, user) {
          console.log(user);
          if (!err) {
              if(user.length > 0){
                var friend = [{name: user[0].name, user_id: user[0].user_id}];
                return res.send(friend);
              }else{
                return res.send([]);
              }
          } else {
              handleError(res, err); 
          }
        });
      },

      getUserById: function (req, res) {
        console.log('getUserById', req.params.db_id);
        return UserModel.findById(req.params.db_id, function (err, user) {
            if (!err) {
                res.send(user);
            } else {
                handleError(res, err); 
            }
        });
      },
      
      createUser: function(req, res) {
        console.log(req.body);
        var item = new UserModel(req.body);

        item.save(function (err) {
            if (!err) {
                res.send({ status: 'OK', item: item });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
      },

      updateUserById: function (req, res) {
        console.log(req.body);
        UserModel.findByIdAndUpdate(req.params.db_id, {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                avatar: req.body.avatar,
            }, 
            function(err, user) {
                if (!err) {
                    res.send(user);
                } else {
                    handleError(res, err); 
                }
            })
      },

      updateUserUseId: function (req, res) {
        console.log(req.body);
        UserModel.findByIdAndUpdate(req.params.db_id, {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                avatar: req.body.avatar,
            }, 
            function(err, user) {
                if (!err) {
                    res.send(user);
                } else {
                    handleError(res, err); 
                }
            })
      },

      updateUserByName: function(req, res) {

        UserModel.findOneAndUpdate(
                {name: req.params.name },
                { "$set": { "name": req.body.name, "user_friends": req.body.user_friends}}
            )
            .exec(function(err, user){
                console.log(user);
                if (!err) {
                    res.send(user);
                } else {
                    handleError(res, err); 
                }
         });
      },

      deleteUser: function (req, res) {
        console.log('deleteUser2');
        UserModel.remove({'_id': req.params.db_id}, function(err){
            if (!err) {
                res.send('Ok');
            } else {
                handleError(res, err); 
            }
        });
      }
    };

module.exports = userController;
