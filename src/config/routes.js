const express = require('express')

module.exports = function(server){
    
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/toDoService')
    todoService.register(router, '/todos')
}