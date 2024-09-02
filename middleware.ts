import { NextRequest, NextResponse } from "next/server";
// import middleware from "next-auth/middleware";
export { default } from "next-auth/middleware";


// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/new-page', request.url))
// }

// export default middleware;

export const config = {
    //*: zero or more paramters
    //+: one or more parameters
    //?: zero or more
    matcher: ['/users/:id*']
}