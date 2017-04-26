'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should return all number',function(){
        expect(app.reverseNumber(123)).to.eql(321);
        });
});

describe('returnOnlyLetter', function ()
{
    it('should return string with letters only', function(){
        expect(app.returnOnlyLetter('ala12')).to.eql('ala');
    });

});

describe('isEmail', function ()
{
    it('should return true',function(){
        expect(app.isEmail('lol@o2.pl')).to.eql(true);
    });
});
