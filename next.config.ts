import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.10.120',
    'app.contentful.com',
    'app.eu.contentful.com',
    'https://redtag-test.vercel.app',
    'local-origin.dev', 
    '*.local-origin.dev',
    '*.vercel.app',
    'https://redtag-test-omsp-h4in1gqix-kirpal-trus-projects.vercel.app/',
    'https://redtag-test-omsp-h4in1gqix-kirpal-trus-projects.vercel.app',
  ],
};

module.exports = nextConfig;

export default nextConfig;
