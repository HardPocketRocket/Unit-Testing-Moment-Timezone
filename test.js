var assert = require('assert');
var moment = require('moment-timezone');

//Implement a test which converts the time between 2 different time zones in a specific moment in time
var losAngeles = moment.tz("2012-12-31 23:59", "America/Los_Angeles");
var newYork = losAngeles.clone().tz("America/New_York");
var alaska = losAngeles.clone().tz("America/Anchorage");

describe('should test the conversion of dates in different timezones(especially the edge cases)', function () {
 it('should return a new year, month and day because the tested time zone is ahead of the current one', function () {
        assert.equal(newYork.format('YYYY-MM-DD HH:mm').toString(), '2013-01-01 02:59')
    });
 it('should return a time thats 1 hour before the current time', function (){
        assert.equal(alaska.format('YYYY-MM-DD HH:mm').toString(), '2012-12-31 22:59')
    });
});
