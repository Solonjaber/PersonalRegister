import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ServiceProvider from '@/models/ServiceProvider';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();

    const serviceProvider = await ServiceProvider.create(body);
    return NextResponse.json(serviceProvider, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create service provider' },
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
    const serviceProviders = await ServiceProvider.find({}).sort({ createdAt: -1 });
    return NextResponse.json(serviceProviders);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch service providers' },
      { status: 500 }
    );
  }
}