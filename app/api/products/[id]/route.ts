import { NextResponse, NextRequest } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { Product } from "@prisma/client";


interface Props {
    params: { id: number }
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
    const user = await prisma.user.findUnique({ where: { id: id.toString() } })
    if (!user) {
        return NextResponse.json({ error: "Product not found!" }, { status: 404 })
    }
    return NextResponse.json({ result: user })
}

export async function PUT(request: NextRequest,
    { params: { id } }: Props) {


    const body = await request.json() as Product

    const validation = schema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 404 })
    }

    const product = await prisma.product.findUnique({
        where: { id: +id }
    })

    if (!product) {
        return NextResponse.json({ error: "Product not found!" }, { status: 404 })
    }

    const updatedProduct = await prisma.product.update({
        where: {
            id: product.id
        },
        data: {
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(updatedProduct)
}

export async function DELETE(request: NextRequest,
    { params: { id } }: Props) {
    const product = await prisma.product.findUnique({
        where: { id: +id }
    })

    if (!product) {
        return NextResponse.json({ error: "Product not found!" }, { status: 404 })
    }

    await prisma.user.delete({ where: { id: product.id.toString() } })
    return NextResponse.json({ messge: "Product deleted successfully!" })
}