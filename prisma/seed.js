const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  await prisma.order.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.restaurant.deleteMany();

  const customers = await prisma.customer.createMany({
    data: [
      { name: "Alice", phone: "081234567890" },
      { name: "Bob", phone: "081234567891" },
      { name: "Charlie", phone: "081234567892" }
    ]
  });

  const restaurants = await prisma.restaurant.createMany({
    data: [
      { name: "Warung Mantap", description: "Indonesian food", isOpen: true },
      { name: "Pizza Corner", description: "Italian pizza", isOpen: false },
      { name: "Sushi House", description: "Japanese sushi", isOpen: true }
    ]
  });

  const allCustomers = await prisma.customer.findMany();
  const allRestaurants = await prisma.restaurant.findMany();

  const now = new Date();

  await prisma.order.createMany({
    data: [
      {
        customerId: allCustomers[0].id,
        restaurantId: allRestaurants[0].id,
        itemCount: 2,
        orderedAt: now,
        etaMinutes: 2 * 10 + 10
      },
      {
        customerId: allCustomers[0].id,
        restaurantId: allRestaurants[1].id,
        itemCount: 1,
        orderedAt: now,
        etaMinutes: 1 * 10 + 10
      },
      {
        customerId: allCustomers[1].id,
        restaurantId: allRestaurants[2].id,
        itemCount: 3,
        orderedAt: now,
        etaMinutes: 3 * 10 + 10
      },
      {
        customerId: allCustomers[2].id,
        restaurantId: allRestaurants[0].id,
        itemCount: 4,
        orderedAt: now,
        etaMinutes: 4 * 10 + 10
      },
      {
        customerId: allCustomers[2].id,
        restaurantId: allRestaurants[2].id,
        itemCount: 2,
        orderedAt: now,
        etaMinutes: 2 * 10 + 10
      }
    ]
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
