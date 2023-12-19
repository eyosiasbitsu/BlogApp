const Profile = require('../models/Profile');

const getAllProfiles  = async (req, res) => {
    try{
        const profiles = await Profile.find();

        if(!profiles){
            res.status(404).json({
                message: 'No profiles Found'
            })
        }
        res.json(profiles);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

// get's id of a blog and returns the blog that has that id
const getProfile = async (req, res) => {
    try{
        const id = req.params.id;
        const profile = await Profile.findById(id);
        
        res.status(2001).json(profile);

    }catch(err){
        res.status(500).json({ message: err.message});
    }
};

const createProfile = async (req, res) => {
    try{
        const { title } = req.body;
        const newProfile = new Profile({ title });

        const savedProfile = new newProfile.save();
        res.status(201).json(savedProfile);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// We are gonna need authorization for updating a profile
const updateProfile = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    try{
        const profile = Profile.findById(id);

        if(!profile){
            res.send(404).json({
                message: 'Category not Found'
            });
        }

        for(key in update){
            profile[key] = update[key];
        };

        const updatedProfile = new profile.save();
        res.status(2001).json(updatedProfile);

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// this need authorization for admin since it deletes all of the profiles
const deleteAllProfiles = async (req, res) => {

    try{
        const deleteProfile = await Profile.deleteMany();

        if(deleteProfiled.deletedCount == 0){
            res.status(404).json({
                message: 'No profiles found for this user'
            });
        }

        res.json({
            message: `Deleted all profiles: ${id}`
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
    
};

// Needs authentication to know that this is the user it self
const deleteProfile = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedProfile = await Profile.findByIdAndDelete(id);

        if(!deletedProfile){
            res.status(404).json({
                message: 'Profile not found'
            });
        }

        res.json(deletedProfile)
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllProfiles,
    getProfile,
    createProfile,
    updateProfile,
    deleteAllProfiles,
    deleteProfile
}