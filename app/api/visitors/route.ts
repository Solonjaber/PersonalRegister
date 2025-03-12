import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Visitor from '@/models/Visitor';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();

    const visitor = await Visitor.create(body);
    return NextResponse.json(visitor, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create visitor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const visitors = await Visitor.find({}).sort({ createdAt: -1 });
    return NextResponse.json(visitors);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch visitors' },
      { status: 500 }
    );
  }
}