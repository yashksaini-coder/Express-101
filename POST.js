const express = require('express');
const app = express(); 

const users = [{
    id: 1,
    name: 'Yash',
    kidney: [{
        healthy:'good'
    }],
    id: 2,
    name: 'Deepanshu',
    kidney: [{
        healthy:'bad'
    }],
    id: 3,
    name: 'Paras',
    kidney: [{
        healthy:'good'
    }]
}];

// Get ==> Fetch data from the server

app.get('/', function(req, res){
    const userkidney = users[0].kidney;
    const total_kidney = userkidney.length;
    let num_healthy_kidney = 0;
    for (let i = 0; i < userkidney.length; i++) {
        if(userkidney[i].healthy){
            num_healthy_kidney += 1;
        }        
    }
    const num_unhealthy_kidney = total_kidney - num_healthy_kidney;
    res.json({
        total_kidney,
        num_healthy_kidney,
        num_unhealthy_kidney
    })
})

// POST ==> Send data to the server
app.post('/', function(req,res){

})


app.listen(3000);