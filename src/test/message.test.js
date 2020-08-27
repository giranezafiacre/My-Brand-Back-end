import { describe, it } from 'mocha';
import server from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testUserData from '../mochData/user';
import testmessage from '../mochData/message';
import{token} from './user.test';

const { expect } = chai;
chai.use(chaiHttp);
let messageId
let id1=45676543456;
let token1 ='dfghjkjhgfty' ;

describe('create message', () => {
    it('Should allow a user to create message', (done) => {
        chai.request(server).post('/message').send(testmessage[0])
            .end((err, res) => {
                messageId=res.body.data._id;
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()});
    });
});
describe('read all message', () => {
    it('Should allow an authenticated user to read all messages', (done) => {
        chai.request(server).get('/message').set('Authorization', token)
            .end((err, res) => {
                console.log(res.body.data);
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()});
    });
});

describe('read message by id', () => {
    it('Should allow an authenticated user to read message by id', (done) => {
        console.log(messageId);
        chai.request(server).get(`/message/${messageId}`).set('Authorization', token)
            .end((err, res) => {
                console.log(res.body);
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()});
    });
    it('Should not allow an authenticated user to read message by id which does not exist', (done) => {
        chai.request(server).get(`/message/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('message not found');
                done()});
    });
});

describe('update message by id', () => {
    it('Should not allow user who provided wrong token to update message', (done) => {
        chai.request(server).put(`/message/${messageId}`).send(testmessage[2]).set('Authorization', token1)
        .end((err, res) => {
            
                expect(res).to.have.status(401);
                expect(res.body.error).to.equal('You are not authorized to perform this task');
                done()});
    });
    it('Should allow an authenticated user to update message by id', (done) => {
        chai.request(server).put(`/message/${messageId}`).send(testmessage[2]).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()});
    });
    it('Should not allow an authenticated user to update message by id which does not exist', (done) => {
        chai.request(server).put(`/message/${id1}`).send(testmessage[2]).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('message not found');
                done()});
    });

});

describe('delete message by id', () => {
   
    it('Should not allow user who provided wrong token to delete message', (done) => {
        chai.request(server).delete(`/message/${messageId}`).set('Authorization', token1)
        .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('You are not authorized to perform this task');
            }, done());
    });
    it('Should allow an authenticated user to delete message by id', (done) => {
        chai.request(server).delete(`/message/${messageId}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(204);
                done()});
    });
    it('Should not allow an authenticated user to update message by id which does not exist', (done) => {
        chai.request(server).delete(`/message/${id1}`).set('Authorization', token)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('status');
                expect(res.body.error).to.equal('message not found');
                done()});
    });
});
