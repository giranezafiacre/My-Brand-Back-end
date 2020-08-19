import comments from '../models/comments';
import { v4 as uuidv4 } from 'uuid';


export const readAll = (req, res) => {
    if (!comments) {
        return res.status(404).json({
            status: 404,
            error: 'No comment found',
        });
    }
    return res.status(200).json({
        status: 200,
        message: 'comments successfully retrieved',
        data: {
            comments,
        },
    });
};
export const readById = (req, res) => {
    const id = req.params.id;
    const comment = comments.filter((comment) => {
        return comment.id === id;
    });
    if (comment[0]) {
        return res.status(200).json({
            status: 200,
            message: 'comment successfully retrieved',
            data: comment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'comment not found',
    });

};
export const create = (req, res) => {
    const comment = {
        id: uuidv4(),
        fullname: req.body.fullname,
        suggestion: req.body.suggestion
       
    };
    comments.push(comment);
    return res.status(201).json({
        status: 201,
        message: 'comment successfully created',
        data: comment,
    });

};

export const update=(req,res)=>{
    const id = req.params.id;
    const comment = comments.filter((comment) => {
        return comment.id === id;
    });
    if(comment[0]){
        comment[0].fullname= req.body.fullname;
        comment[0].suggestion= req.body.suggestion;
        return res.status(200).json({
            status: 200,
            message: 'comment successfully updated',
            data: comment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'comment not found',
    });
    
}


export const deleteComment=(req,res)=>{
    const id=req.params.id;
    const comment = comments.filter((comment) => {
        return comment.id === id;
    });
    if(comment[0]){
        var a = comments.indexOf(comment[0]);
        comments.splice(a, 1);
        return res.status(200).json({
            status: 200,
            message: 'comment successfully deleted',
            data: comment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'comment not found',
    });
}