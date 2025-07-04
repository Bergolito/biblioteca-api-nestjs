import { Module } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { EditoraController } from './editora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditoraEntity } from './editora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EditoraEntity])],
  controllers: [EditoraController],
  providers: [EditoraService],
  exports: [EditoraService]
})
export class EditoraModule {}
