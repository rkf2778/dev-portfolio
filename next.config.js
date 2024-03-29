const {
  withHydrationOverlay
} = require("@builder.io/react-hydration-overlay/next")

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      loader: 'custom'
    }
  }
  
  module.exports = withHydrationOverlay({
    appRouteSelector:"main",
  })(nextConfig);