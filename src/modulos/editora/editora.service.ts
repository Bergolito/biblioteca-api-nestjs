import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListaEditoraDTO } from './dto/lista-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';
import { EditoraEntity } from './editora.entity';

@Injectable()
export class EditoraService {

    constructor(
      @InjectRepository(EditoraEntity)
      private readonly editoraRepository: Repository<EditoraEntity>,
    ) {}
  
    async criaEditora(editoraEntity: EditoraEntity) {
      await this.editoraRepository.save(editoraEntity);
    }
  
    async listaTodosEditoras() {
      const listaEditorasSalvas = await this.editoraRepository.find();
      const editorasLista = listaEditorasSalvas.map(
        (editora) => new ListaEditoraDTO(editora.id, editora.nome),
      );
      return editorasLista;    
    }
  
    async recuperaEditora(id: number) {
      await this.editoraRepository.findOne({
        where: { id },
      });
    }
  
    async atualizaEditora(id: number, updateEditoraDto: UpdateEditoraDto) {
      await this.editoraRepository.update(id, updateEditoraDto);
    }
  
    async removeEditora(id: number) {
      await this.editoraRepository.delete(id);
    }
  
}
