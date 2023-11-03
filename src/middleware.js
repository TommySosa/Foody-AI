export { default } from "next-auth/middleware";

export const config = { matcher: ["/create-your-plan/:path*", "/download/:path*"] }