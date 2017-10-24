var express = require('express'),
    router  = express.Router(),
    userController  = require("../../server/controllers/userController");

router.get('/api/api', userController.testApi);
router.get('/api/users', userController.getUsersList);
router.get('/api/users/:db_id', userController.getUserById);
router.get('/api/users/name/:name', userController.getUserByName);
router.get('/api/users/friend/:name', userController.getUserFriendByName);
router.post('/api/users', userController.createUser);
router.post('/api/users/login', userController.authenticateUser);
router.put('/api/users/:name', userController.updateUserByName);
router.delete('/api/users/:db_id', userController.deleteUser);


module.exports = router;