import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, password } = await request.json()

    const res = await fetch(`http://localhost:3001/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    if (res.status == 400) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 }, { statusText: 'Email and password are required' })
    }
    if (res.status == 401) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 }, { statusText: 'Invalid credentials' })
    }
    if (res.status == 500) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 }, { statusText: 'Server error' })
    }

    const matchedUser = await res.json();
    return NextResponse.json({
        ...matchedUser
    })
}