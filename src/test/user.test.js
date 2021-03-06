import { describe, it } from 'mocha';
import server from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testUserData from '../mochData/user';


const { expect } = chai;
chai.use(chaiHttp);
let falseId='ghjklkjhgfd';
export let token;
let id1;

describe('User SignUp', () => {
    it('Should allow a user to signup', (done) => {
        chai.request(server).post('/user')
            .send(testUserData[3])
            .end((err, res) => {
                id1=res.body.data._id;
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                expect(res.body.data).to.have.property('_id');
                expect(res.body.data).to.have.property('email');
                expect(res.body.data).to.have.property('password');
                done()
            });
    });
    it('Should NOT allow a user to signup: user already exist', (done) => {
        chai.request(server).post('/user')
            .send(testUserData[4])
            .end((err, res) => {
                expect(res).to.have.status(409);
                expect(res.body.error).to.equal(`user with ${testUserData[4].email} already exists`);
                done()
            });
    });
});

describe('User Login', () => {
    it('Should allow a user to login', (done) => {
        chai.request(server).post('/user/login')
            .send(testUserData[3])
            .end((err, res) => {
                token=res.body.token;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                expect(res.body).to.have.property('token');
                done()
            });
    });
    it('Should NOT allow unauthenticated user to login', (done) => {
        chai.request(server).post('/user/login')
            .send(testUserData[1])
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.error).to.equal('signup first');
                done()
            });
    });
});

describe('read all users', () => {
    it('Should display all users', (done) => {
        chai.request(server).get('/user')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()
            });
    });
});

describe('read a user by id', () => {
    it('Should display a user by id', (done) => {
        chai.request(server).get(`/user/${id1}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()
            });
    });
    it('Shouldnot display a user by id which doesnot exist', (done) => {
        chai.request(server).get(`/user/${falseId}`)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.error).to.equal('user not found');
                done()
            });
    });
});


describe('update a user by id', () => {
    it('Should update a user by id', (done) => {
        chai.request(server).put(`/user/${id1}`)
            .send(testUserData[0])
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
                done()
            });
    });
    it('Should not update a user by id which doesnot exist', (done) => {
        chai.request(server).put(`/user/${falseId}`)
            .send(testUserData[2])
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.error).to.equal('user not found');
                done()
            });
    });
});

describe('delete a user by id', () => {
    it('Should delete a user by id', (done) => {
        chai.request(server).delete(`/user/${id1}`)
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
    it('Should not delete a user by id which doesnot exist', (done) => {
        chai.request(server).delete(`/user/${falseId}`)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.error).to.equal('user not found');
            }, done());
    });
});