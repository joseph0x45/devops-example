const { hello_handler } = require('./handlers');

test('hello_handler returns "world\\n"', () => {
  expect(hello_handler()).toBe("world\n");
});
