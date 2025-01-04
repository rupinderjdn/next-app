import { NextRequest, NextResponse } from 'next/server';
 
type ResponseData = {
  message: string
}
 
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: number }> }
  ) {
    const id = (await params).id;
    console.log(id);
    return NextResponse.json({id: id, name: 'John Doe'});
  }