/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "assets.aceternity.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "aceternity.com",
          pathname: "/images/**",  // Adding specific pathname for images
        },
      ],
    },
  };
  
  export default nextConfig;
