import { Controller, Get, Post, Body, Patch, Param, Delete, assignMetadata, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ImagemEntity } from './imagem.entity';
import { ImagemService } from './imagem.service';
import { CreateImagemDto } from './dto/create-imagem.dto';
import { ListaImagemDTO } from './dto/lista-imagem.dto';
import { UpdateImagemDto } from './dto/update-imagem.dto';

@ApiTags('Imagens')
@Controller('imagens')
export class ImagemController {

  constructor(private readonly imagemService: ImagemService) {}

  @Post()
  criarImagem(@Body() createImagemDto: CreateImagemDto) {

    const imagemEntity = new ImagemEntity();

    //imagemEntity.id = randomUUID();
    imagemEntity.titulo = createImagemDto.titulo;
    imagemEntity.tipo = createImagemDto.tipo;

    this.imagemService.criarImagem(imagemEntity);

    return {
      imagem: new ListaImagemDTO(imagemEntity.id, imagemEntity.titulo),
      message: 'Imagem criada com sucesso',
    };

  }

  @Get()
  listarTodasImagens() {
    return this.imagemService.listarImagens();
  }

  @Get(':id')
  recuperarImagem(@Param('id') id: number) {
    return this.imagemService.recuperarImagem(id);
  }

  @Put(':id')
  atualizarImagem(@Param('id') id: number, @Body() updateImagemDto: UpdateImagemDto) {
    const imagemAtualizada = this.imagemService.atualizarImagem(id, updateImagemDto);

    return {
      imagem: imagemAtualizada,
      message: 'Imagem atualizada com sucesso',
    };

  }

  @Delete(':id')
  removerImagem(@Param('id') id: number) {
    return this.imagemService.removerImagem(id);
  }
}
