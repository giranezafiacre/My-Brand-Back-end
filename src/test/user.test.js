import { describe, it } from 'mocha';
import server from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testUserData from '../mochData/user';
import Users from '../models/users';

const { expect } = chai;
chai.use(chaiHttp);
before('some long setup', function(done) {
    chai.request(server).post('/user')
        .send(testUserData[2]).end((err, res)=>{
        },done());
  }
  )
  after('delete this object after', function(done) {
    chai.request(server).delete(`/user/${testUserData[2].id}`).end((err,res)=>{},done());
  });
describe('User SignUp', () => {
    it('Should allow a user to signup', (done) => {
        chai.request(server).post('/user')
            .send(testUserData[0])
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                expect(res.body.data).to.have.property('id');
                expect(res.body.data).to.have.property('email');
                expect(res.body.data).to.have.property('password');
                expect(res.body.data).to.have.property('role');
            }, done());
    });
    it('Should NOT allow a user to signup: user already exist', (done) => {
        chai.request(server).post('/user')
            .send(testUserData[1])
            .end((err, res) => {
                expect(res).to.have.status(409);
                expect(res.body.error).to.equal(`user with ${testUserData[1].email} already exists`);
            }, done());
    });
});

describe('User Login', () => {
    it('Should allow a user to login', (done) => {
        chai.request(server).get('/user/login')
            .send(testUserData[2])
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                expect(res.body).to.have.property('token');
            }, done());
    });
    it('Should NOT allow unauthenticated user to login', (done) => {
        chai.request(server).get('/user/login')
            .send(testUserData[3])
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.error).to.equal('signup first');
            }, done());
    });
});

describe('read all users', () => {
    it('Should display all users', (done) => {
        chai.request(server).get('/user')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
});

describe('read a user by id', () => {
    it('Should display a user by id', (done) => {
        chai.request(server).get(`/user/${Users[0].id}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Shouldnot display a user by id which doesnot exist', (done) => {
        chai.request(server).get(`/user/${testUserData[0].id}`)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.error).to.equal('user not found');
            }, done());
    });
});


describe('update a user by id', () => {
    it('Should update a user by id', (done) => {
        chai.request(server).put(`/user/${Users[0].id}`)
            .send(testUserData[0])
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not update a user by id which doesnot exist', (done) => {
        chai.request(server).put(`/user/${testUserData[2].id}`)
            .send(testUserData[2])
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.error).to.equal('user not found');
            }, done());
    });
});

describe('delete a user by id', () => {
    it('Should delete a user by id', (done) => {
        chai.request(server).delete(`/user/${Users[3].id}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
            }, done());
    });
    it('Should not delete a user by id which doesnot exist', (done) => {
        chai.request(server).delete(`/user/${testUserData[2].id}`)
            .send(testUserData[0])
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.error).to.equal('user not found');
            }, done());
    });
});