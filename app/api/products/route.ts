import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import { Product } from "@prisma/client";


export async function GET(req: NextRequest) {
    const result = await prisma.product.findMany()
    return NextResponse.json({ result })
}

export async function POST(request: NextRequest) {
    const body = await request.json() as Product;
    const validation = schema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 404 })
    }

    const product = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(product, { status: 201 })
}

