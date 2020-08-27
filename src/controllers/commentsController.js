import comments from '../models/comments';


class Comment{
    async readAll(req, res) {
        const comment = await comments.find();
        return res.status(200).json({
            status: 200,
            message: 'comments successfully retrieved',
            data: {
                comment,
            },
        });
    };
    async readById(req, res) {
        try {
            const comment = await comments.findOne({ _id: req.params.id });
            return res.status(200).json({
                status: 200,
                message: 'comment successfully retrieved',
                data: comment,
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: 'comment not found',
            });
        }
    
    };
    async create(req, res) {
        const comment1 = {
            fullname: req.body.fullname,
            suggestion:req.body.suggestion
        };
        const comment = new comments(comment1);
        await comment.save();
        return res.status(201).json({
            status: 201,
            message: 'comment successfully created',
            data: comment,
        });
    
    };
    
    async update(req, res) {
        const id = req.params.id;
        try {
            const comment = await comments.findOne({ _id: id });
                comment.fullname = req.body.fullname;
                comment.suggestion = req.body.suggestion;
            await comment.save();
    
            return res.status(200).json({
                status: 200,
                message: 'comment successfully updated',
                data: comment,
            });
    
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: 'comment not found',
            });
    
        }
    
    }
    
    async deleteComment(req, res) {
        const id = req.params.id;
        try {
            await comments.findOne({ _id: id });
            await comments.deleteOne({ _id: id });
            return res.status(204).json({
                status: 204,
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: "comment not found"
            });
        }
    }
}
export default new Comment();
