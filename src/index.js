const os = require('os');
const dns = require('dns');
const universalify = require('universalify');

const lookup = universalify.fromCallback(dns.lookup);
const lookupService = universalify.fromCallback(dns.lookupService);

async function getFQDN(ip) {
  if (!ip) ip = await lookup(os.hostname(), { hints: dns.ADDRCONFIG });
  const fqdn = await lookupService(ip, 0);
  return fqdn;
}

module.exports = universalify.fromPromise(getFQDN);
