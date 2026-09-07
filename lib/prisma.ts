import "dotenv/config";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});


// tạo 1 chỗ trên global để giữ Prisma Client trong môi trường development
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};


// nếu đã có Prisma Client -> dùng lại | chưa có thì tạo mới
export const prisma = globalForPrisma.prisma ?? new PrismaClient({adapter,});


// trong development, lưu instance lại để  Next.js không tạo quá nhiều connection khi hot reload
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}