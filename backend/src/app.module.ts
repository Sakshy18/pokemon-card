import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { PokemonModule } from './pokemon/pokemon.module';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [forwardRef(() => PokemonModule),UploadModule], 
  providers: [PrismaService,AppService],
  exports: [PrismaService],
  controllers: [AppController]
})
export class AppModule {}
