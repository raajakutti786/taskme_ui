const { assert } = require('chai');
const chai = require('chai');
const nock = require('nock');
//const request = require('supertest');
const localApp = require('../helloworld');
//const expressApp = require('../app');

describe('GET /', function () {

   //This is testing local code
    it ('Updating Incoming requests', () => {
      const result = localApp.updateRequest ("UI ","Layer")
      chai.assert.equal (result, "UI Layer")
    })
});




