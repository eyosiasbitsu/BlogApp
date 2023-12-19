const User = require('../models/User');

const getAllUsers  = async (req, res) => {
    try{
        const users = await User.find();

        if(!users){
            res.status(404).json({
                message: 'No profiles Found'
            })
        }
        res.json(users);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

// get's id of a blog and returns the blog that has that id
const getUser = async (req, res) => {
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        
        res.status(2001).json(user);

    }catch(err){
        res.status(500).json({ message: err.message});
    }
};

const createUser = async (req, res) => {
    try{
        const { title } = req.body;
        const newUser = new User({ title });

        const savedUser = new newUser.save();
        res.status(201).json(savedUser);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// We are gonna need authorization for updating a profile
const updateUser = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    try{
        const user = User.findById(id);

        if(!user){
            res.send(404).json({
                message: 'Category not Found'
            });
        }

        for(key in update){
            user[key] = update[key];
        };

        const updatedUser = new user.save();
        res.status(2001).json(updatedUser);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// this need authorization for admin since it deletes all of the profiles
const deleteAllUsers = async (req, res) => {

    try{
        const deleteUsers = await User.deleteMany();

        if(deleteUsers.deletedCount == 0){
            res.status(404).json({
                message: 'No profiles found for this user'
            });
        }

        res.json({
            message: `Deleted all profiles}`
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
    
};

// Needs authentication to know that this is the user it self
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedUser = await User.findByIdAndDelete(id);

        if(!deletedUser){
            res.status(404).json({
                message: 'User not found'
            });
        }

        res.json(deletedUser)
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteAllUsers,
    deleteUser
}