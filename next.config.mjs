/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'www.google.com', 'another-domain.org'],
    }, 
    experimental: {
        serverComponentsExternalPackages: ["pdf-parse"],
    },
};

export default nextConfig;
