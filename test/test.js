const test = require('ava');
const isCI = require('is-ci');

const getFQDN = require('..');

test('promise returns FQDN', async t => {
  const fqdn = await getFQDN('178.128.149.101');
  t.is(fqdn, 'mx1.forwardemail.net');
});

test.cb('callback returns FQDN', t => {
  getFQDN('178.128.149.101', (err, fqdn) => {
    t.is(err, null);
    t.is(fqdn, 'mx1.forwardemail.net');
    t.end();
  });
});

if (isCI) {
  test('does not throw  error with local IP lookup', async t => {
    await t.notThrowsAsync(getFQDN);
  });

  test.cb('callback does not throw error with local IP lookup', t => {
    getFQDN(err => {
      t.is(err, null);
      t.end();
    });
  });
} else {
  test('throws error with local IP lookup', async t => {
    const err = await t.throwsAsync(getFQDN);
    t.regex(err.message, /getnameinfo ENOTFOUND/);
  });

  test.cb('callback throws error with local IP lookup', t => {
    getFQDN(err => {
      t.regex(err.message, /getnameinfo ENOTFOUND/);
      t.end();
    });
  });
}
