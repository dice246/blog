interface Result {
  <T>(arg: T): T;
}

function identity<T>(arg: T):T {
  return arg;
}