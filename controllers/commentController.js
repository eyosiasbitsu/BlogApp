const Comment = require('../models/Comment');

const getAllComments  = async (req, res) => {
    try{
        const Comments = await Comment.find();

        if(!Comments){
            res.status(404).json({
                message: 'No Comments Found'
            })
        }
        res.json(Comments);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

// get's id of a blog and returns the blog that has that id
const getComment = async (req, res) => {
    try{
        const id = req.params.id;
        const comment = await Comment.findById(id);
        
        res.status(2001).json(comment);

    }catch(err){
        res.status(500).json({ message: err.message});
    }
};

const createComment = async (req, res) => {
    try{
        const { title } = req.body;
        const newComment = new Comment({ title });

        const savedComment = new newComment.save();
        res.status(201).json(savedComment);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

const updateComment = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    try{
        const comment = Comment.findById(id);

        if(!comment){
            res.send(404).json({
                message: 'Category not Found'
            });
        }

        for(key in update){
            comment[key] = update[key];
        };

        const updatedComment = new comment.save();
        res.status(2001).json(updatedComment);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// this gets id of a commenter and deletes all of the blogs he posted
const deleteAllComments = async (req, res) => {
    const { id } = req.params;

    try{
        const deleteComment = await Comment.deleteMany({user : id});

        if(deleteComment.deletedCount == 0){
            res.status(404).json({
                message: 'No matching comment found for this user'
            });
        }

        res.json({
            message: `Deleted all comments for user ID: ${id}`
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
    
};

// Gets an id of a comment and deletes that blog.
const deleteComment = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedComment = await Comment.findByIdAndDelete(id);

        if(!deletedComment){
            res.status(404).json({
                message: 'Comment not found'
            });
        }

        res.json(deletedComment)
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteAllComments,
    deleteComment
}