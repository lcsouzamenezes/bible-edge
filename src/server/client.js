
const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
  instance: {
    app: 'bible-edge',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:3000/books',
    port: {
      '$': 3000,
      '@enabled': 'true',
    },
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: '127.0.0.1',
    port: 8761,
    servicePath: '/eureka/apps/'
  },
});

module.exports = client
