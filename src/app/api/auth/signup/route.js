import { NextResponse } from "next/server";

export async function POST(request) {
    const { first_name, last_name, email, genre, birthdate, password } = await request.json()

    const res = await fetch(`http://localhost:3001/api/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            genre,
            birthdate,
            password
        })
    });

    if (res.status == 409) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 409 }, { statusText: 'Email already exists' })
    }
    if (res.status == 400) {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 }, { statusText: 'Invalid data' })
    }
    if (res.status == 500) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 }, { statusText: 'Server error' })
    }

    const newUser = await res.json();
    return NextResponse.json({
        ...newUser
    })
}