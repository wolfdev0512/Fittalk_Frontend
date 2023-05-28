/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// next.js configuration
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "https://fittalk.vercel.app" : "http://localhost:3000",
  images: {
    domains: [
      "images.ctfassets.net",
      "res.cloudinary.com",
      "assets.instantsearchplus.com",
      "cdn.shopify.com",
      "magento.instantsearchplus.com",
    ],
    path: isProd
      ? "https://fittalk.vercel.app/_next/image"
      : "http://localhost:3000/_next/image",
  },

};

module.exports = nextConfig;
