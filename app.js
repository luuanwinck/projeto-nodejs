const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// MySQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'node_exe'
});

//Get all
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`conectar como id ${connection.theadId}`)
        
        connection.query('SELECT * from exp', (err, rows) => {
            connection.release(); //retornar conexão ao pool
            
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})



//Get por ID
app.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`conectar como id ${connection.theadId}`)
        
        connection.query('SELECT * from exp WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release(); //retornar conexão ao pool
            
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})


//Delete
app.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`conectar como id ${connection.theadId}`)
        
        connection.query('DELETE from exp WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release(); //retornar conexão ao pool
            
            if (!err) {
                res.send(`Exp com o id do registro: ${[req.params.id]} foi removido.`)
            } else {
                console.log(err)
            }
        })
    })
})


//Add
app.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`conectar como id ${connection.theadId}`)

        const params = req.body
        
        connection.query('INSERT INTO exp SET ?', params, (err, rows) => {
            connection.release(); //retornar conexão ao pool
            
            if (!err) {
                res.send(`Exp com o id do registro: ${params.nome} foi adicionado.`)
            } else {
                console.log(err)
            }
        })

        console.log(req.body)
    })
})


//Update
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`conectar como id ${connection.theadId}`)

        const { id, nome, slogan, descricao, imagem } = req.body
        
        connection.query('UPDATE exp SET nome = ?, slogan = ?, descricao = ?, imagem = ? WHERE id = ?', [nome, slogan, descricao, imagem, id] , (err, rows) => {
            connection.release(); //retornar conexão ao pool
            
            if (!err) {
                res.send(`Exp com o id do registro: ${nome} foi editado.`)
            } else {
                console.log(err)
            }
        })

        console.log(req.body)
    })
})






//ouvir(listen) na porta do ambiente ou 5000
app.listen(port, () => console.log(`Ouvir a porta ${port}`))