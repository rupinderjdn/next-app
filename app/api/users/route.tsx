import { NextRequest, NextResponse } from "next/server";

// GET - fetch users
export async function GET(request : NextRequest) {
    return NextResponse.json([
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Jane Doe'},
        {id: 3, name: 'John Smith'},
    ])
}
// POST - create user
// PUT - update user
// DELETE - delete user