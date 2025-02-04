/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [{
            protocol: 'https',
            hostname: 'as2.ftcdn.net',
          },]
    },
    output: "export"
};

export default nextConfig;
