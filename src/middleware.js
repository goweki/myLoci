// Without a defined matcher, this line applies next-auth
// to the entire project
export { default } from "next-auth/middleware";
export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
