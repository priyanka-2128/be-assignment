
const users = require("../data/users");


function createProfile(req, res) {

    const user = users.find(
        u => u.email === req.session.userEmail
    );

    if (user.profile) {
        return res.send("Profile already exists");
    }

    const { qualification, skills, jobIds } = req.body;

    if (!qualification || !skills || !jobIds) {
        return res.send("Please enter all profile details");
    }

    user.profile = {
        qualification: qualification,
        skills: skills.split(",").map(s => s.trim()),
        jobIds: jobIds.split(",").map(id => id.trim()),
        applications: jobIds.split(",").map(id => ({
            jobId: id.trim(),
            status: "Applied"
        }))
    };

    res.send("Profile created successfully");
}



function deleteProfile(req, res) {

    const user = users.find(
        u => u.email === req.session.userEmail
    );

    if (!user.profile) {
        return res.send("Profile does not exist");
    }

    delete user.profile;

    res.send("Profile deleted successfully");
}


// WITHDRAW APPLICATION
function withdrawApplication(req, res) {

    const user = users.find(
        u => u.email === req.session.userEmail
    );

    if (!user.profile) {
        return res.send("Please create your profile first");
    }

    const { jobId } = req.body;

    const application = user.profile.applications.find(
        app => app.jobId === jobId
    );

    if (!application) {
        return res.send("Application not found");
    }

    if (application.status === "Withdrawn") {
        return res.send("Application is already withdrawn");
    }

    application.status = "Withdrawn";

    res.send("Application is withdrawn");
}


module.exports = {
    createProfile,
    deleteProfile,
    withdrawApplication
};
