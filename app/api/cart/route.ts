import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/app/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { InferModel, eq, sql, isNull } from 'drizzle-orm';

export const GET = async (request: NextRequest) => {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id') ?? "0"
    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, id));
        return NextResponse.json({ res });
    } catch (error: any) {
        return NextResponse.json({ message: error.message })
    }
}

export const POST = async (request: NextRequest) => {

    const req = await request.json();
    const uid = uuid();
    const setCookies = cookies();
    const user_id = setCookies.get("user_id")?.value;
    if (!user_id) {
        setCookies.set("user_id", uid);
    }

    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: setCookies.get("user_id")?.value as string
        }).returning();
        return NextResponse.json({ res });
    } catch (error: any) {
        return NextResponse.json({ message: error.message })
    }
}