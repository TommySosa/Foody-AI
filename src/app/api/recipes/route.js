import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import axios from "axios";

export async function GET(req) {
    const tag = req.nextUrl.searchParams.get('tag')
    revalidateTag(tag)
    const res = await fetch("http://localhost:3001/api/recipes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();

    return NextResponse.json({
        data
    })
}

export async function POST(req) {
    const { proteins, fats, carbs, result, userId } = await req.json()
    try {
        const res = await axios.post("http://localhost:3001/api/recipe", {
            proteins,
            fats,
            carbs,
            result,
            userId
        })
        
        const newRecipe = res.data;
        return NextResponse.json({
            ...newRecipe
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json("")
    }
}

