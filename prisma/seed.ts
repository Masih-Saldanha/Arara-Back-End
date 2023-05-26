import { prisma } from "../src/config/database.js";

async function main() {
    await prisma.users.upsert({
        where: { id: 1 },
        update: {},
        create: {
            username: "user seed test",
            password: "!Password1"
        }
    })

    await prisma.comments.upsert({
        where: { id: 1 },
        update: {},
        create: {
            comment: "comment seed test",
            userId: 1,
        }
    })
}

main()
    .catch((e => {
        console.log(e);
        process.exit(1);
    }))
    .finally(async () => {
        await prisma.$disconnect();
    });