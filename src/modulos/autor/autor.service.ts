import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutorEntity } from './autor.entity';
import { ListaAutorDTO } from './dto/lista-autor.dto';

@Injectable()
export class AutorService {

  constructor(
    @InjectRepository(AutorEntity)
    private readonly autorRepository: Repository<AutorEntity>,
  ) {}

  async criaAutor(autorEntity: AutorEntity) {
    await this.autorRepository.save(autorEntity);
  }

  async listaTodosAutores() {
    const listaAutoresSalvos = await this.autorRepository.find();
    const autoresLista = listaAutoresSalvos.map(
      (autor) => new ListaAutorDTO(autor.id, autor.nome),
    );
    return autoresLista;    
  }

  async recuperaAutor(id: number) {
    await this.autorRepository.findOne({
      where: { id },
    });
  }

  async atualizaAutor(id: number, updateAutorDto: UpdateAutorDto) {
    await this.autorRepository.update(id, updateAutorDto);
  }

  async removeAutor(id: number) {
    await this.autorRepository.delete(id);
  }

}
