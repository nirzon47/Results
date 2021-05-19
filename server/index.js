const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'rootpassword',
    database: 'results',
});

app.post('/create', (req, res) => {
    const roll = req.body.roll;
    const name = req.body.name;
    const math = req.body.math;
    const phy = req.body.phy;
    const chem = req.body.chem;

    db.query("INSERT INTO records (roll, name, math, phy, chem, total, percent) VALUES (?,?,?,?,?,?,?)", 
    [roll, name, math, phy, chem, (Number(math) + Number(phy) + Number(chem)), ((Number(math) + Number(phy) + Number(chem)) / Number(3))], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    })

});

app.get('/records', (req, res) => {
    db.query("SELECT * FROM records ORDER BY percent DESC", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.put('/update', (req, res) => {
    const roll = req.body.roll;
    const newName = req.body.newName;
    db.query("UPDATE records SET name = ? WHERE roll = ?", [newName, roll, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }]);
});

app.delete('/delete/:roll', (req, res) => {
    const roll = req.params.roll;
    db.query("DELETE from records WHERE roll = ?", roll, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send (result);
        }
    })
})

app.listen(4200, () => {
    console.log("Server running")
});