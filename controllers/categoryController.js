const Category = require('../models/Category');

const getAllCategories  = async (req, res) => {
    try{
        const categories = await Category.find();

        if(!categories){
            res.status(404).json({
                message: 'No categories Found'
            })
        }
        res.json(categories);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

// get's id of a blog and returns the blog that has that id
const getCategory = async (req, res) => {
    try{
        const id = req.params.id;
        const category = await Category.findById(id);
        
        res.status(2001).json(category);

    }catch(err){
        res.status(500).json({ message: err.message});
    }
};

const createCategory = async (req, res) => {
    try{
        const { title } = req.body;
        const newCategory = new Category({ title });

        const savedCategory = new newCategory.save();
        res.status(201).json(savedCategory);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

const updateCategory = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    try{
        const category = Category.findById(id);

        if(!category){
            res.send(404).json({
                message: 'Category not Found'
            });
        }

        for(key in update){
            category[key] = update[key];
        };

        const updatedCategory = new category.save();
        res.status(2001).json(updatedCategory);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

const deleteAllCategories = async (req, res) => {
    const { id } = req.params;

    try{
        const deleteCategory = await Category.deleteMany({user : id});

        if(deleteCategory.deletedCount == 0){
            res.status(404).json({
                message: 'No matching categories found for this user'
            });
        }

        res.json({
            message: `Deleted all categories for user ID: ${id}`
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
    
};

// Gets an id of a blog and deletes that blog.
const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedCategory = await Category.findByIdAndDelete(id);

        if(!deletedCategory){
            res.status(404).json({
                message: 'Category not found'
            });
        }

        res.json(deletedCategory)
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteAllCategories,
    deleteCategory
};