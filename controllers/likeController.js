const Like = require('../models/Like');

const getAllLikes  = async (req, res) => {
    try{
        const Likes = await Like.find();

        if(!Likes){
            res.status(404).json({
                message: 'No Likes Found'
            })
        }
        res.json(Likes);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

// get's id of a blog and returns the blog that has that id
const getLike = async (req, res) => {
    try{
        const id = req.params.id;
        const like = await Like.findById(id);
        
        res.status(2001).json(like);

    }catch(err){
        res.status(500).json({ message: err.message});
    }
};

const createLike = async (req, res) => {
    try{
        const { title } = req.body;
        const newLike = new Like({ title });

        const savedLike = new newLike.save();
        res.status(201).json(savedLike);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

const updateLike = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    try{
        const like = Like.findById(id);

        if(!like){
            res.send(404).json({
                message: 'Category not Found'
            });
        }

        for(key in update){
            like[key] = update[key];
        };

        const updatedLike = new like.save();
        res.status(2001).json(updatedLike);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// this gets id of a commenter and deletes all of the blogs he posted
const deleteAllLikes = async (req, res) => {
    const { id } = req.params;

    try{
        const deleteLike = await Like.deleteMany({user : id});

        if(deleteLike.deletedCount == 0){
            res.status(404).json({
                message: 'No matching Like found for this user'
            });
        }

        res.json({
            message: `Deleted all Likes for user ID: ${id}`
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
    
};

// Gets an id of a comment and deletes that blog.
const deleteLike = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedLike = await Like.findByIdAndDelete(id);

        if(!deletedLike){
            res.status(404).json({
                message: 'Like not found'
            });
        }

        res.json(deletedLike)
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllLikes,
    getLike,
    createLike,
    updateLike,
    deleteAllLikes,
    deleteLike
}