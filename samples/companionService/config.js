/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.d07108e278b843a08757a3f7e336a692',
    clientSecret: 'eb24aaf744cd73aac5496ff85bf0e2cd93499d567e79769c0a9313fa7a396177',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/home/pi/Desktop/alexa-avs-raspberry-pi-master/samples/javaclient/certs/server/node.key',
    sslCert: '/home/pi/Desktop/alexa-avs-raspberry-pi-master/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/home/pi/Desktop/alexa-avs-raspberry-pi-master/samples/javaclient/certs/ca/ca.crt',
    products: {
        "my_device": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
