import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { CreateEditoraDto } from './dto/create-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';
import { EditoraEntity } from './editora.entity';
import { ListaEditoraDTO } from './dto/lista-editora.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Editoras')
@Controller('editoras')
export class EditoraController {
  constructor(private readonly editoraService: EditoraService) {}

  @Post()
  async criarEditora(@Body() createEditoraDto: CreateEditoraDto) {
    const editoraEntity = new EditoraEntity();
    editoraEntity.nome = createEditoraDto.nome;

    this.editoraService.criaEditora(editoraEntity);

    return {
      autor: new ListaEditoraDTO(editoraEntity.id, editoraEntity.nome),
      message: 'Editora criada com sucesso',
    };
  }

  @Get()
  async listarTodasEditoras() {
    const lista = await this.editoraService.listaTodosEditoras();
    return lista;
  }

  @Get(':id')
  async recuperarEditora(@Param('id') id: number) {
    return await this.editoraService.recuperaEditora(id);
  }

  @Put(':id')
  async atualizarEditora(@Param('id') id: number, @Body() updateEditoraDto: UpdateEditoraDto) {
    const editoraAtualizada = await this.editoraService.atualizaEditora(id, updateEditoraDto);

    return {
      editora: editoraAtualizada,
      message: 'Editora atualizada com sucesso',
    };
  }

  @Delete(':id')
  async removerEditora(@Param('id') id: number) {
    const editoraRemovida = this.editoraService.removeEditora(id);

    return {
      editora: editoraRemovida,
      message: 'Editora excluída com sucesso',
    };

  }
}
