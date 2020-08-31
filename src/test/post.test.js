import { describe, it } from 'mocha';
import server from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testUserData from '../mochData/user';
import testpost from '../mochData/post';
import{token} from './user.test';
import Users from '../models/users';
import posts from '../models/posts';

const { expect } = chai;
chai.use(chaiHttp);
let id1=45678765;
let token1 = 'hgfdjhgfd';
let postId;
let token2;

describe('create post', () => {
    it('Should NOT allow a user who did not provide token to create post', (done) => {
        chai.request(server).post('/post')
            .send(testpost[1])
            .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body.error).to.equal('Token not provided');
                done()});
    });
    it('Should allow an authenticated user to create post', (done) => {
        chai.request(server).post('/post').set('Authorization', token)
            .send(testpost[0])
            .end((err, res) => {
                postId=res.body.data._id;
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()});
    });
    it('Should not allow user who provided wrong token to create post', (done) => {
        chai.request(server).post('/post').set('Authorization', token1)
            .send(testpost[0])
            .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('You are not authorized to perform this task');
                done()});
    });
});
describe('read all post', () => {
    it('Should allow an authenticated user to read all posts', (done) => {
        chai.request(server).get('/post').set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()});
    });
});

describe('read post by id', () => {
    it('Should allow an authenticated user to read post by id', (done) => {
        chai.request(server).get(`/post/${postId}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()});
    });
    it('Should not allow an authenticated user to read post by id which does not exist', (done) => {
        chai.request(server).get(`/post/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('post not found');
                done()});
    });
});

describe('update post by id', () => {
    it('Should not allow user who provided wrong token to update post', (done) => {
        chai.request(server).put(`/post/${postId}`).send(testpost[2]).set('Authorization', token1)
        .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body.error).to.equal('You are not authorized to perform this task');
                done()});
    });
    it('Should allow an authenticated user to update post by id', (done) => {
        chai.request(server).put(`/post/${postId}`).send(testpost[2]).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()});
    });
    it('Should not allow an authenticated user to update post by id which does not exist', (done) => {
        chai.request(server).put(`/post/${id1}`).send(testpost[2]).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('post not found');
                done()});
    });

});

describe('delete post by id', () => {
   
    it('Should not allow user who provided wrong token to delete post', (done) => {
        chai.request(server).delete(`/post/${postId}`).set('Authorization', token1)
        .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('You are not authorized to perform this task');
                done()});
    });
    it('Should allow an authenticated user to delete post by id', (done) => {
        chai.request(server).delete(`/post/${postId}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(204);
                done()});
    });
    it('Should not allow an authenticated user to update post by id which does not exist', (done) => {
        chai.request(server).delete(`/post/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('post not found');
                done()});
    });
});
