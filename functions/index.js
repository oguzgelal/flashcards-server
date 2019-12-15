'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

const sessionCounter = require('./src/sessionCounter')

admin.initializeApp();

exports.sessionCounter = sessionCounter;
