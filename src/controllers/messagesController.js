import messages from '../models/messages';

class Message{
    async readAll(req, res) {
        const message = await messages.find();
        return res.status(200).json({
            status: 200,
            message: 'messages successfully retrieved',
            data: {
                message,
            },
        });
    };
    async readById(req, res) {
        try {
            const message = await messages.findOne({ _id: req.params.id });
            return res.status(200).json({
                status: 200,
                message: 'message successfully retrieved',
                data: message,
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: 'message not found',
            });
        }
    
    };
    async create(req, res) {
        const message1 = {
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        };
        const message = new messages(message1);
        await message.save();
        return res.status(201).json({
            status: 201,
            message: 'message successfully created',
            data: message,
        });
    
    };
    
    async update(req, res) {
        const id = req.params.id;
        try {
            const message = await messages.findOne({ _id: id });
                message.fullname = req.body.fullname;
                message.email = req.body.email;
                message.phone = req.body.phone;
                message.message = req.body.message;
    
            await message.save();
    
            return res.status(200).json({
                status: 200,
                message: 'message successfully updated',
                data: message,
            });
    
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: 'message not found',
            });
    
        }
    
    }
    
    async deleteMessage(req, res) {
        const id = req.params.id;
        try {
            await messages.findOne({ _id: id });
            await messages.deleteOne({ _id: id });
            return res.status(204).json({
                status: 204,
            });
        } catch (error) {
            return res.status(404).json({
                status: 204,
                error: "message not found"
            });
        }
    }
}
export default new Message();
