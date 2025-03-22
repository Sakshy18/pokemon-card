import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
      {
        name: 'Pikachu', type: 'Electric', hp: 35, attack: 55, defense: 40,
        speed: 0
      },
      {
        name: 'Charmander', type: 'Fire', hp: 39, attack: 52, defense: 43,
        speed: 0
      },
      {
        name: 'Bulbasaur', type: 'Grass', hp: 45, attack: 49, defense: 49,
        speed: 0
      },
      {
        name: 'Squirtle', type: 'Water', hp: 44, attack: 48, defense: 65,
        speed: 0
      },
      {
        name: 'Eevee', type: 'Normal', hp: 55, attack: 55, defense: 50,
        speed: 0
      },
    ],
  });
  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
