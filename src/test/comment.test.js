import { describe, it } from 'mocha';
import server from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testUserData from '../mochData/user';
import testcomment from '../mochData/comment';
import Users from '../models/users';
import comments from '../models/comments';

const { expect } = chai;
chai.use(chaiHttp);
var token;
let id1='dfghjkjhgfty';
let token1 = 'hgfdjhgfd';
let token2;
before('create some data', function (done) {
    chai.request(server).get('/user/login')
        .send(testUserData[4]).end((err, res)=>{
            token=res.body.token;
        },done());
  }
);
after('delete this object after', function (done) {
    chai.request(server).delete(`/user/${testUserData[4].id}`).end((err, res) => { }, done());
});

describe('create comment', () => {
    it('Should NOT allow a user who did not provide token to create comment', (done) => {
        chai.request(server).post('/comment')
            .send(testcomment[1])
            .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body.error).to.equal('Token not provided');
            }, done());
    });
    it('Should allow an authenticated user to create comment', (done) => {
        chai.request(server).post('/comment').set('Authorization', token)
            .send(testcomment[0])
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not allow user who provided wrong token to create comment', (done) => {
        chai.request(server).post('/comment').set('Authorization', token1)
            .send(testcomment[0])
            .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('You are not authorized to perform this task');
            }, done());
    });
});
describe('read all comment', () => {
    it('Should allow an authenticated user to read all comments', (done) => {
        chai.request(server).get('/comment').set('Authorization', token2)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
});

describe('read comment by id', () => {
    it('Should allow an authenticated user to read comment by id', (done) => {
        chai.request(server).get(`/comment/${comments[2].id}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not allow an authenticated user to read comment by id which does not exist', (done) => {
        chai.request(server).get(`/comment/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('comment not found');
            }, done());
    });
});

describe('update comment by id', () => {
    it('Should not allow user who provided wrong token to update comment', (done) => {
        chai.request(server).put(`/comment/${comments[2].id}`).send(testcomment[2]).set('Authorization', token2)
        .end((err, res) => {
            
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body.data).to.equal('You are not authorized to perform this task');
            }, done());
    });
    it('Should allow an authenticated user to update comment by id', (done) => {
        chai.request(server).put(`/comment/${comments[2].id}`).send(testcomment[2]).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not allow an authenticated user to update comment by id which does not exist', (done) => {
        chai.request(server).put(`/comment/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('comment not found');
            }, done());
    });

});

describe('delete comment by id', () => {
   
    it('Should not allow user who provided wrong token to delete comment', (done) => {
        chai.request(server).delete(`/comment/${comments[2].id}`).set('Authorization', token1)
        .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('You are not authorized to perform this task');
            }, done());
    });
    it('Should allow an authenticated user to delete comment by id', (done) => {
        chai.request(server).delete(`/comment/${comments[2].id}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not allow an authenticated user to update comment by id which does not exist', (done) => {
        chai.request(server).delete(`/comment/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('comment not found');
            }, done());
    });
});
 