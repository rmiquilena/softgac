/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/api/todos",
                destination: "http://localhost:3000/api/todos",
            }
        ]
    }
};

export default nextConfig;
