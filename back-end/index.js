 const express =require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const port = 3000

 const UserModel = require('./models/Users')

 const app = express();
 app.use(cors())
 app.use(express.json())

 // Database connection to MongoDB
mongoose.connect('mongodb+srv://admin:admin@zuitt-course-booking.a1svtt9.mongodb.net/crud?retryWrites=true&w=majority')
.then(() => {
  console.log('connected to MongoDB')
  // Server running in terminal
  app.listen(port, () => {
      console.log(`Node API app is running on port ${port}`)
    })
}).catch((error) => {
console.log(error)
})

// Create A User
app.post("/createUser", (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Retrieve A User / Display All users
app.get('/', (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Get a single user
app.get('/getUser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Update a user
app.put('/updateUser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Delete a user
app.delete('/deleteUser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))

})

