import { Module, forwardRef } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PrismaService } from '../prisma.service';
import { AppModule } from '../app.module'; 

@Module({
  imports: [forwardRef(() => AppModule)],
  providers: [PokemonService, PrismaService], 
  controllers: [PokemonController],
  exports: [PokemonService], 
})
export class PokemonModule {}
