import { cliTable2Json } from 'cli-table-2-json';

const lines = ['NAME      ACTIVE   DRIVER      STATE     URL                         SWARM',
  'consul1   -        amazonec2   Running   tcp://54.175.200.212:2376   ',
  'consul2   -        amazonec2   Running   tcp://52.23.236.38:2376     ',
  'consul3   -        amazonec2   Running   tcp://54.85.111.241:2376    ',
  ''];

const result = cliTable2Json(lines);
console.log(result);
