import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPokemon() {
    return await this.prisma.pokemon.findMany();
  }
}