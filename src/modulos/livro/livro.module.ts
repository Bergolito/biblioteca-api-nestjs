import { Module } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroEntity } from './livro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LivroEntity]),
  ],
  controllers: [LivroController],
  providers: [LivroService]
})
export class LivroModule { }
