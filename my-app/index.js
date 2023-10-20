/*
 * @Author: Zkiki
 * @Date: 2023-10-20 16:10:57
 * @FilePath: \node-express\my-app\index.js
 * @Description: 
 */
const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})