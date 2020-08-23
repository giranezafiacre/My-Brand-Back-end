import posts from '../models/posts';
import { v4 as uuidv4 } from 'uuid';


export const readAll = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: 'posts successfully retrieved',
        data: {
            posts,
        },
    });
};
export const readById = (req, res) => {
    const id = req.params.id;
    const post = posts.filter((post) => {
        return post.id === id;
    });
    if (post[0]) {
        return res.status(200).json({
            status: 200,
            message: 'post successfully retrieved',
            data: post,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'post not found',
    });

};
export const create = (req, res) => {
    const post = {
        id: uuidv4(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    posts.push(post);
    return res.status(201).json({
        status: 201,
        message: 'post successfully created',
        data: post,
    });

};

export const update = (req, res) => {
    const id = req.params.id;
    const post = posts.filter((post) => {
        return post.id === id;
    });
    if (post[0]) {
        post[0].title = req.body.title;
        post[0].content = req.body.content;
        post[0].author = req.body.author;
        return res.status(200).json({
            status: 200,
            message: 'post successfully updated',
            data: post,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'post not found',
    });

}

export const deletePost = (req, res) => {
    const id = req.params.id;
    const post = posts.filter((post) => {
        return post.id === id;
    });
    if (post[0]) {
        var a = posts.indexOf(post[0]);
        posts.splice(a, 1);
        return res.status(200).json({
            status: 200,
            message: 'post successfully deleted',
            data: post,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'post not found',
    });
}