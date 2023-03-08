/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["source.unsplash.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "source.unsplash.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
