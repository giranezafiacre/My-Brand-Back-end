import { describe, it } from 'mocha';
import server from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testUserData from '../mochData/user';

const { expect } = chai;
chai.use(chaiHttp);
describe('User SignUp', () => {
    it('Should allow a user to signup', (done) => {
        chai.request(server).post('/user')
            .send(testUserData[0])
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('data');
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

