/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const repoName = 'TripClime-'; 

const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  basePath: isGithubPages ? `/${repoName}` : '',
  trailingSlash: true
};

export default nextConfig;
