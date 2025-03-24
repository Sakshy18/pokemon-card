import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { PokemonModule } from './pokemon/pokemon.module'; // ✅ Ensure correct path
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [forwardRef(() => PokemonModule),UploadModule], // ✅ Import PokemonModule correctly
  providers: [PrismaService,AppService],
  exports: [PrismaService], // ✅ Ensure PrismaService is available to PokemonModule
  controllers: [AppController]
})
export class AppModule {}
