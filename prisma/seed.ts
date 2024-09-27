import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


function getShelves() {
    return [{

        name: "Dairy",
        items: {
            create: [{ name: "milk" }, { name: "eggs" }, { name: "cheese" }]
        }

    }, {

        name: "Fruits",
        items: {
            create: [{ name: "apples" }, { name: "oranges" }, {
                name: "Bannnanas"
            }]
        }
    }
    ]
}

async function seed() {
    await Promise.all(getShelves().map(shelf => db.pantryShelf.create({ data: shelf })))
}

seed()