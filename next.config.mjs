/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingExcludes: {
    "*": ["./handoff/**/*"]
  }
};

export default nextConfig;
