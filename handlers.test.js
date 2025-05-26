const { hello_handler, sorry_handler, fruit_handler } = require('./handlers');

test('hello_handler returns "world\\n"', () => {
  expect(hello_handler()).toBe("world\n");
});

test('sorry_handler returns "world\\n"', () => {
  expect(sorry_handler()).toBe("sorry\n");
});

//flaky test
test('fruit_handler returns "banana\\n"', () => {
  expect(fruit_handler()).toBe("banana\n");
});
