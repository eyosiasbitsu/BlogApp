
const Blog = require('../models/Blog');

const getAllBlogs  = async (req, res) => {
    try{
        const blogs = await Blog.find();
        res.json(blogs);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

// get's id of a blog and returns the blog that has that id
const getBlog = async (req, res) => {
    try{
        const id = req.params.id;
        const blog = await Blog.findById(id);
        
        res.status(2001).json(blog);

    }catch(err){
        res.status(500).json({ message: err.message});
    }
};

const createBlog = async (req, res) => {
    try{
        const { title, content, image } = req.body;
        const newBlog = new Blog({ title, content, image });

        const savedBlog = new newBlog.save();
        res.status(201).json(savedBlog);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

const updateBlog = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    try{
        const blog = Blog.findById(id);

        if(!blog){
            res.send(404).json({
                message: 'Blog not Found'
            });
        }

        for(key in update){
            blog[key] = update[key];
        };

        const updatedBlog = new blog.save();
        res.status(2001).json(updatedBlog);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// this gets id of a bloger and deletes all of the blogs he posted
const deleteAllBlogs = async (req, res) => {
    const { id } = req.params;

    try{
        const deleteResult = await Blog.deleteMany({user : id});

        if(deleteResult.deletedCount == 0){
            res.status(404).json({
                message: 'No matching blogs found for this user'
            });
        }

        res.json({
            message: `Deleted all Blogs for user ID: ${id}`
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
    
};

// Gets an id of a blog and deletes that blog.
const deleteBlog = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if(!deletedBlog){
            res.status(404).json({
                message: 'Blog not found'
            });
        }

        res.json(deletedBlog)
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteAllBlogs,
    deleteBlog
}