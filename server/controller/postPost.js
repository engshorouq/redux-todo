const {insertPost} = require('../database/queries/insertPost');

exports.postPost = async(req, res) => {
    try{
        const {title, body} = req.body.data;
        const {rows} = await insertPost(title, body)
        console.log(rows);
        res.send({data: {title: rows[0].title, body: rows[0].body}});
    }
    catch{
        res.status(500).send({error: 'Internal Server Error'});
    }
}