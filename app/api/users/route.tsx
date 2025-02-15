import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import { User } from "@prisma/client";


export async function GET(req: NextRequest) {
    const result = await prisma.user.findMany()
    // return NextResponse.json([
    //     { id: 1, name: "Top G" },
    //     { id: 2, name: "Davis" },
    // ])
    return NextResponse.json({ result })
}

export async function POST(request: NextRequest) {
    const body = await request.json() as User
    const validation = schema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 404 })
    }

    const user = await prisma.user.findUnique({
        where: { email: body.email! }
    })
    if (user) {
        return NextResponse.json({ message: "User already registered!" }, { status: 400 })
    }
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(newUser, { status: 201 })
}

