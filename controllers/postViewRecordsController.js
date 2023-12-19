const PostViewRecord = require('../models/PostViewRecord');

const getAllPostViewRecord  = async (req, res) => {
    try{
        const postViewRecord = await Like.find();

        if(!postViewRecord){
            res.status(404).json({
                message: 'No Likes Found'
            })
        }
        res.json(postViewRecord);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

// get's id of a blog and returns the blog that has that id
const getPostViewRecord = async (req, res) => {
    try{
        const id = req.params.id;
        const postViewRecord = await PostViewRecord.findById(id);
        
        res.status(2001).json(postViewRecord);

    }catch(err){
        res.status(500).json({ message: err.message});
    }
};

const createPostViewRecord = async (req, res) => {
    try{
        const { title } = req.body;
        const newPostViewRecord = new PostViewRecord({ title });

        const savedPostViewRecord = new newPostViewRecord.save();
        res.status(201).json(savedPostViewRecord);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

const updatePostViewRecord = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    try{
        const postViewRecord = PostViewRecord.findById(id);

        if(!postViewRecord){
            res.send(404).json({
                message: 'Category not Found'
            });
        }

        for(key in update){
            postViewRecord[key] = update[key];
        };

        const updatedPostViewRecord = new postViewRecord.save();
        res.status(2001).json(updatedPostViewRecord);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// this gets id of a commenter and deletes all of the blogs he posted
const deleteAllPostViewRecords = async (req, res) => {
    const { id } = req.params;

    try{
        const deletePostViewRecord = await PostViewRecord.deleteMany({user : id});

        if(deletePostViewRecord.deletedCount == 0){
            res.status(404).json({
                message: 'No matching PostViewRecord found for this user'
            });
        }

        res.json({
            message: `Deleted all postViewRecords for user ID: ${id}`
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
    
};

// Gets an id of a comment and deletes that blog.
const deletePostViewRecord = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedPostViewRecord = await PostViewRecord.findByIdAndDelete(id);

        if(!deletedPostViewRecord){
            res.status(404).json({
                message: 'PostViewRecord not found'
            });
        }

        res.json(deletedPostViewRecord)
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllPostViewRecord,
    getPostViewRecord,
    createPostViewRecord,
    updatePostViewRecord,
    deleteAllPostViewRecords,
    deletePostViewRecord
}