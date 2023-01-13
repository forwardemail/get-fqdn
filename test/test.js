const test = require('ava');
const isCI = require('is-ci');

const getFQDN = require('..');

test('promise returns FQDN', async (t) => {
  const fqdn = await getFQDN('138.197.213.185');
  t.is(fqdn, 'mx1.forwardemail.net');
});

if (isCI) {
  test('does not throw error with local IP lookup', async (t) => {
    await t.notThrowsAsync(getFQDN);
  });
} else {
  test('throws error with local IP lookup', async (t) => {
    const err = await t.throwsAsync(getFQDN);
    t.regex(err.message, /ENOTFOUND/);
  });
}
