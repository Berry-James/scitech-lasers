/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    ['@snowpack/plugin-sass', { style: 'compressed' }],
    ["@snowpack/plugin-optimize", { }],
/*     ["@snowpack/plugin-webpack", { }], */
  ],
  install: [
/*     "animejs",
    "bulma",
    "fullpage.js",
    "gsap",
    "particles.js",
    "wavify" */
  ],
  installOptions: {
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
