import { Controller, Get, Post, Body, Patch, Param, Delete, assignMetadata, Put } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { LivroEntity } from './livro.entity';
import { ListaLivroDTO } from './dto/lista-livro.dto';
import { ApiTags } from '@nestjs/swagger';
import { AutorEntity } from '../../modulos/autor/autor.entity';
import { EditoraEntity } from '../../modulos/editora/editora.entity';
import { randomUUID } from 'crypto';

@ApiTags('Livros')
@Controller('livros')
export class LivroController {

  constructor(private readonly livroService: LivroService) {}

  @Post()
  criarLivro(@Body() createLivroDto: CreateLivroDto) {

    const livroEntity = new LivroEntity();

    //livroEntity.id = randomUUID();
    livroEntity.titulo = createLivroDto.titulo;
    livroEntity.subtitulo = createLivroDto.subtitulo;
    livroEntity.edicao = createLivroDto.edicao;
    livroEntity.ano = createLivroDto.ano;
    livroEntity.isbn = createLivroDto.isbn;
    livroEntity.paginas = createLivroDto.paginas;
    livroEntity.autor = Object.assign(new AutorEntity(), createLivroDto.autor); 
    livroEntity.editora = Object.assign(new EditoraEntity(), createLivroDto.editora);

    this.livroService.criarLivro(livroEntity);

    return {
      livro: new ListaLivroDTO(livroEntity.id, livroEntity.titulo),
      message: 'Livro criado com sucesso',
    };

  }

  @Get()
  listarTodosLivros() {
    return this.livroService.listarLivros();
  }

  @Get(':id')
  recuperarLivro(@Param('id') id: number) {
    return this.livroService.recuperarLivro(id);
  }

  @Put(':id')
  atualizarLivro(@Param('id') id: number, @Body() updateLivroDto: UpdateLivroDto) {
    const livroAtualizado = this.livroService.atualizarLivro(id, updateLivroDto);

    return {
      livro: livroAtualizado,
      message: 'Livro atualizado com sucesso',
    };

  }

  @Delete(':id')
  removerLivro(@Param('id') id: number) {
    return this.livroService.removerLivro(id);
  }
}
