import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(req, {params}){
    const tag = req.nextUrl.searchParams.get('tag')
    revalidateTag(tag)
    const res = await fetch(`http://localhost:3001/api/recipe/${params.recipeId}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(res.status == 404){
        return NextResponse.json({ error: 'Not found' }, { status: 404 }, {statusText: "Not Found"})
    }
    const data = await res.json();
    return NextResponse.json({
        data
    })
}