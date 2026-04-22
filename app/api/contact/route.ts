import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await dbConnect();

        // Check if we really have a DB connection or if we are mocking
        if (process.env.MONGODB_URI) {
            const contact = await Contact.create(body);
            return NextResponse.json({ success: true, data: contact }, { status: 201 });
        } else {
            // Simulation mode
            console.log("Mock DB Insert:", body);
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return NextResponse.json({ success: true, message: "Form submitted (Simulation Mode)" }, { status: 200 });
        }

    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}
