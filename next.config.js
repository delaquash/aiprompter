/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack(config) {
    //     config.experiments = { ...config.experiments, topLevelAwait: true }
    //     return config
    // },
    images: {
        domains: ["cdn.imagin.studio"]
    },
    // experimental: {
    //     appDir: true,
    //     serverComponentsExternalPackages: ["mongoose"],
    //   },  
}

module.exports = nextConfig
