// setting must be insync with setting_web of server //
const entity = '/Entity';
const measureunit = '/MeasureUnit';
const account = '/Account';

const datacol = '/DataCol';
const datacollist = '/DataColList';

const serverport = ':3000';
const serverurl = 'http://127.0.0.1' + serverport;

const vas_apiEntity = serverurl + entity;
const vas_apiEntityDataCol = vas_apiEntity + datacol;
const vas_apiEntityDataColList = vas_apiEntity + datacollist;

const vas_apiAccount = serverurl + account;
const vas_apiAccountDataCol = vas_apiAccount + datacol;
const vas_apiAccountDataColList = vas_apiAccount + datacollist;

const vas_apiMeasureUnit = serverurl + measureunit;
const vas_apiMeasureUnitDataColList = vas_apiEntity + datacollist;

