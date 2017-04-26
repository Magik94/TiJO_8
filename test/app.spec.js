'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should return all number',function(){
        expect(app.reverseNumber(123)).to.eql(321);
        });
    it('should return false',function(){
        expect(app.reverseNumber('ala51')).to.eql(false);
        });
});

describe('returnOnlyLetter', function ()
{
    it('should return string with letters only', function(){
        expect(app.returnOnlyLetter('ala12')).to.eql('ala');
    });

    it('should retrun false',function(){
        expect(app.returnOnlyLetter(51)).to.eql(false);
        });

});

describe('isEmail', function ()
{
    it('should return true',function(){
        expect(app.isEmail('lol@o2.pl')).to.eql(true);
    });
    it('should return false',function(){
        expect(app.isEmail('23wp.pl')).to.eql(false);
        });
});
