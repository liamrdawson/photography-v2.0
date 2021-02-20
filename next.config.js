const path = require('path')
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = {
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.resolve.alias['react'] = path.resolve('node_modules/react')
    config.resolve.alias['react-dom'] = path.resolve('node_modules/react-dom')

    // Important: return the modified config
    return config
  },
}