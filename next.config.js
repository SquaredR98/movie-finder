/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_TOKEN: process.env.NEXT_PUBLIC_TOKEN
  }
}

module.exports = nextConfig
