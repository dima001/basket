const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Player} = require('./../models/player');

describe('POST /players', () => {
    it('should creat a new player', (done) => {
        var text = 'Test player name';

        request(app)
            .post('/players')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                
                Player.find().then((players) => {
                    expect(players.length).toBe(1);
                    expect(players[0].text.toBe(text));
                done();
            
                }).catch((e) => done(e));
            });
    });
});