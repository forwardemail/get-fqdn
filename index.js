const os = require('node:os');
const dns = require('node:dns');

async function getFQDN(ip) {
  if (ip) {
    const { hostname } = await dns.promises.lookupService(ip, 0);
    return hostname;
  }

  const { address } = await dns.promises.lookup(os.hostname(), {
    hints: dns.ADDRCONFIG
  });
  const { hostname } = await dns.promises.lookupService(address, 0);
  return hostname;
}

module.exports = getFQDN;
