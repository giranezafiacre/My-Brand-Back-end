import { describe, it } from 'mocha';
import server from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testUserData from '../mochData/user';
import testmessage from '../mochData/message';
import Users from '../models/users';
import messages from '../models/messages';

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

describe('create message', () => {
    it('Should allow a user to create message', (done) => {
        chai.request(server).post('/message').send(testmessage[0])
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
});
describe('read all message', () => {
    it('Should allow an authenticated user to read all messages', (done) => {
        chai.request(server).get('/message').set('Authorization', token2)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
});

describe('read message by id', () => {
    it('Should allow an authenticated user to read message by id', (done) => {
        chai.request(server).get(`/message/${messages[2].id}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not allow an authenticated user to read message by id which does not exist', (done) => {
        chai.request(server).get(`/message/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('message not found');
            }, done());
    });
});

describe('update message by id', () => {
    it('Should not allow user who provided wrong token to update message', (done) => {
        chai.request(server).put(`/message/${messages[2].id}`).send(testmessage[2]).set('Authorization', token2)
        .end((err, res) => {
            
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body.data).to.equal('You are not authorized to perform this task');
            }, done());
    });
    it('Should allow an authenticated user to update message by id', (done) => {
        chai.request(server).put(`/message/${messages[2].id}`).send(testmessage[2]).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not allow an authenticated user to update message by id which does not exist', (done) => {
        chai.request(server).put(`/message/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('message not found');
            }, done());
    });

});

describe('delete message by id', () => {
   
    it('Should not allow user who provided wrong token to delete message', (done) => {
        chai.request(server).delete(`/message/${messages[2].id}`).set('Authorization', token1)
        .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('You are not authorized to perform this task');
            }, done());
    });
    it('Should allow an authenticated user to delete message by id', (done) => {
        chai.request(server).delete(`/message/${messages[2].id}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not allow an authenticated user to update message by id which does not exist', (done) => {
        chai.request(server).delete(`/message/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('message not found');
            }, done());
    });
});
