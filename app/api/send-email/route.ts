import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextRequest) {
    const { data, error } = await resend.emails.send({
        from: "...",//verifid domain, 
        to: ["gehikhamhen247@gmail.com"],
        subject: "Welcome",
        react: WelcomeTemplate({ name: "Toby" })
    })

    if (error) {
        return NextResponse.json(error, {status:400});
    }

    return NextResponse.json({ message: "Successfully!" })
}