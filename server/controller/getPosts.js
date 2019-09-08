const {selectPosts} = require('../database/queries/selectPosts');

exports.getPosts = async(req, res) => {
    try{
        const {rows} = await selectPosts();
        res.send({data: rows})
    }
    catch{
        res.status(500).send({error: 'Internal Server Error'});
    }
}