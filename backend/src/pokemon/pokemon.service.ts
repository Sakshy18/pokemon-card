import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  async getAllPokemons() {
    return this.prisma.pokemon.findMany();
  }
}
