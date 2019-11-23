export default ({ prop = "all", speed = "300ms", ease = "ease" }): string =>
  `transition: ${prop} ${speed} ${ease}`;
