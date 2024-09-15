import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { data, error } = await resend.emails.send({
        from: "...",//verifid domain, 
        to: ["gehikhamhen247@gmail.com"],
        subject: "Welcome",
        react: WelcomeTemplate({ name: "Toby" })
    })

    if (error) {
        return res.status(400).json(error);
    }

    return res.json({ message: "Successfully!" })
}