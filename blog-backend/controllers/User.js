function home(req, res) {
    res.send("welcome home");
};

function login(req, res) {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
};

function check(req, res) {
    res.send("this is a protected route")
};

function noCheck(req, res) {
    res.send("this is not a protected route")
};

function profile(req, res) {
    res.send(`hello ${req.oidc.user.sub}`);
};

function admin(req, res) {
    res.send(`Hello ${req.oidc.user.nickname}, this is the admin section.`)
};

function userInfo(req, res) {
    res.send(req.oidc.fetchUserInfo());
    // ...
};


// function deleteAuthorByID(req, res) {
//     const id = req.params.id
//     authorModel.findByIdAndRemove(id)
//         .then(author => {
//             res.status(200).send(author)
//         }).catch(err => {
//             console.log(err)
//             res.status(500).send(err)
//         })
// }

module.exports = {
    login,
    check,
    noCheck,
    profile,
    admin,
    userInfo,
    home
}