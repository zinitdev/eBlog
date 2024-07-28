import { cache } from 'react';
import prisma from '@/lib/db';

export const getCategories = cache(async () => {
    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch categories');
    }
});