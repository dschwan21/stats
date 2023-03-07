/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PLAYER_INFO_URL: process.env.PLAYER_INFO_URL,
  }
}

module.exports = nextConfig
