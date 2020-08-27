import posts from '../models/posts';


class Post{
    async readAll(req, res) {
        const Post = await posts.find();
        return res.status(200).json({
            status: 200,
            message: 'posts successfully retrieved',
            data: {
                Post,
            },
        });
    };
    async readById(req, res) {
        try {
            const Post = await posts.findOne({ _id: req.params.id });
            return res.status(200).json({
                status: 200,
                message: 'post successfully retrieved',
                data: Post,
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: 'post not found',
            });
        }
    
    };
    async create(req, res) {
        const post1 = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        };
        const post = new posts(post1);
        await post.save();
        return res.status(201).json({
            status: 201,
            message: 'post successfully created',
            data: post,
        });
    
    };
    
    async update  (req, res)  {
        const id = req.params.id;
        try {
            const post = await posts.findOne({ _id: id });
                post.title = req.body.title;
                post.content = req.body.content;
                post.author = req.body.author;
          
              await post.save();
       
            return res.status(200).json({
                status: 200,
                message: 'post successfully updated',
                data: post,
            });
    
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: 'post not found',
            });
        
        }
            
    }
    
    async deletePost (req, res)  {
        const id = req.params.id;
        try {
            await posts.findOne({ _id: id });
            await posts.deleteOne({ _id: id });
            return res.status(204).json({
                status: 204,
            });
          } catch(error) {
              return res.status(404).json({
                status: 204,
                error: "post not found"
            });
          }
    }
}
export default new Post();