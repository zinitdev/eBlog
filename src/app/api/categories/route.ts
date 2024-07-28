import { NextResponse } from 'next/server';
import { getCategories } from '@/utils/caching';

export async function GET() {
    try {
        const categories = await getCategories();
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch categories' },
            { status: 500 },
        );
    }
}
