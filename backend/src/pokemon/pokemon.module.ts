import { Module, forwardRef } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PrismaService } from '../prisma.service';
import { AppModule } from '../app.module'; // ✅ Ensure correct path

@Module({
  imports: [forwardRef(() => AppModule)], // ✅ Fix circular dependency
  providers: [PokemonService, PrismaService], // ✅ Ensure PrismaService is available
  controllers: [PokemonController],
  exports: [PokemonService], // ✅ Export service if needed in other modules
})
export class PokemonModule {}
