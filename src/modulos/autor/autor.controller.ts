import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { AutorEntity } from './autor.entity';
import { ListaAutorDTO } from './dto/lista-autor.dto';

@ApiTags('Autores')
@Controller('autores')
export class AutorController {

  constructor(private readonly autorService: AutorService) {}

  @Post()
  async criarAutor(@Body() createAutorDto: CreateAutorDto) {
    const autorEntity = new AutorEntity();
    autorEntity.nome = createAutorDto.nome;
    autorEntity.nacionalidade = createAutorDto.nacionalidade;

    this.autorService.criaAutor(autorEntity);

    return {
      autor: new ListaAutorDTO(autorEntity.id, autorEntity.nome),
      message: 'Autor criado com sucesso',
    };
  }

  @Get()
  async listarTodosAutores() {
    const lista = await this.autorService.listaTodosAutores();
    return lista;
  }

  @Get(':id')
  async recuperarAutor(@Param('id') id: number) {
    return await this.autorService.recuperaAutor(id);
  }

  @Put(':id')
  async atualizarAutor(@Param('id') id: number, @Body() updateAutorDto: UpdateAutorDto) {
    const autorAtualizado = await this.autorService.atualizaAutor(id, updateAutorDto);

    return {
      autor: autorAtualizado,
      message: 'Autor atualizado com sucesso',
    };
  }

  @Delete(':id')
  async removerAutor(@Param('id') id: number) {
    const autorRemovido = await this.autorService.removeAutor(id);
    
    return {
      autor: autorRemovido,
      message: 'Autor excluído com sucesso',
    };
  }
}
