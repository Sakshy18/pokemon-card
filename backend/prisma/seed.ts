import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.deleteMany();

  await prisma.pokemon.createMany({
    data: [
      {
        name: 'Pikachu',
        type: 'Electric',
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke1.jpeg"
      },
      {
        name: 'Charmander',
        type: 'Fire',
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke2.jpeg"
      },
      {
        name: 'Squirtle',
        type: 'Water',
        hp: 44,
        attack: 48,
        defense: 65,
        speed: 43,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke3.jpeg"
      },
      {
        name: 'Jigglypuff',
        type: 'Normal',
        hp: 115,
        attack: 45,
        defense: 20,
        speed: 20,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke4.jpeg"
      },
      {
        name: 'Meowth',
        type: 'Normal',
        hp: 40,
        attack: 45,
        defense: 35,
        speed: 90,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke5.jpeg"
      },
      {
        name: 'Psyduck',
        type: 'Water',
        hp: 50,
        attack: 52,
        defense: 48,
        speed: 55,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke6.jpeg"
      },
      {
        name: 'Jolteon',
        type: 'Electric',
        hp: 65,
        attack: 65,
        defense: 60,
        speed: 130,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke7.jpeg"
      },
      {
        name: 'Snorlax',
        type: 'Normal',
        hp: 160,
        attack: 110,
        defense: 65,
        speed: 30,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke8.jpeg"
      },
      {
        name: 'Mewtwo',
        type: 'Psychic',
        hp: 106,
        attack: 110,
        defense: 90,
        speed: 130,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke9.jpeg"
      },
      {
        name: 'Sceptile',
        type: 'Grass',
        hp: 70,
        attack: 85,
        defense: 65,
        speed: 120,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke10.jpeg"
      },
      {
        name: 'Luxray',
        type: 'Electric',
        hp: 80,
        attack: 120,
        defense: 79,
        speed: 70,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke11.jpeg"
      },
      {
        name: 'Dialga',
        type: 'Steel',
        hp: 100,
        attack: 120,
        defense: 120,
        speed: 90,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke12.jpeg"
      },
      {
        name: 'Palkia',
        type: 'Water',
        hp: 90,
        attack: 120,
        defense: 100,
        speed: 100,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke13.jpeg"
      },
      {
        name: 'Haunter',
        type: 'Ghost',
        hp: 45,
        attack: 50,
        defense: 45,
        speed: 95,
        imageUrl: "https://tqfeowazscruajudvfno.supabase.co/storage/v1/object/public/pokemon-image/poke14.jpeg"
      }
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
