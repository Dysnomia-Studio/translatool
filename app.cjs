'use strict';

const electron = require('electron');
import('./app.js').then((m) => m.load(electron));