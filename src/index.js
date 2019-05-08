const dns = require('dns');
const universalify = require('universalify');
const ip = require('ip');

const lookupService = universalify.fromCallback(dns.lookupService);

async function getFQDN(address = ip.address()) {
  const fqdn = await lookupService(address, 0);
  return fqdn;
}

module.exports = universalify.fromPromise(getFQDN);
