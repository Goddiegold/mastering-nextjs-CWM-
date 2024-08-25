import { NextResponse, NextRequest } from "next/server";
import schema from "../schema";


interface Props {
    params: { id: number }
}

export function GET(request: NextRequest, { params: { id } }: Props) {
    if (id > 10) {
        return NextResponse.json({ error: "Product not found!" }, { status: 404 })
    }
    return NextResponse.json({ id, name: "Fish" })
}

export async function PUT(request: NextRequest,
    { params: { id } }: Props) {

    const body = await request.json()

    const validation = schema.safeParse(body)

    if(!validation.success){
        return NextResponse.json(validation.error.errors, { status: 404 })
    }

    if (id > 10) {
        return NextResponse.json({ error: "Product not found!" }, { status: 404 })
    }
    return NextResponse.json({ id, ...body })
}

export async function DELETE(request: NextRequest,
    { params: { id } }: Props) {

    const body = await request.json()
    if (id > 10) {
        return NextResponse.json({ error: "Product not found!" }, { status: 404 })
    }
    return NextResponse.json({ messge: "Product deleted successfully!" })
}