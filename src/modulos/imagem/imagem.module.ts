import { Module } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { ImagemController } from './imagem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagemEntity } from './imagem.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImagemEntity]),
  ],
  controllers: [ImagemController],
  providers: [ImagemService]
})
export class ImagemModule { }
