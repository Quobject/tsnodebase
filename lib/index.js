"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli_table_2_json_1 = require("cli-table-2-json");
var lines = ['NAME      ACTIVE   DRIVER      STATE     URL                         SWARM',
    'consul1   -        amazonec2   Running   tcp://54.175.200.212:2376   ',
    'consul2   -        amazonec2   Running   tcp://52.23.236.38:2376     ',
    'consul3   -        amazonec2   Running   tcp://54.85.111.241:2376    ',
    ''];
var result = cli_table_2_json_1.cliTable2Json(lines);
console.log(result);
