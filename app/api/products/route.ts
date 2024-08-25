import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";


export function GET(req: NextRequest) { 
    return NextResponse.json([
        { id: 1, name: "Egg", price:2.55 },
        { id: 2, name: "Milk", price:3.55 },
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body)

    if(!validation.success){
        return NextResponse.json(validation.error.errors, { status: 404 })
    }

    return NextResponse.json(body, { status: 201 })
}

