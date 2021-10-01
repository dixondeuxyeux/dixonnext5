module.exports = {
  reactStrictMode: true,
  images: { domains: ['res.cloudinary.com'] },
}

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config
  },
}

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
}
