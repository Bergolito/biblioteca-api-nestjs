import { Injectable } from '@nestjs/common';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { LivroEntity } from './livro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListaLivroDTO } from './dto/lista-livro.dto';

@Injectable()
export class LivroService {

  constructor(
    @InjectRepository(LivroEntity)
    private readonly livroRepository: Repository<LivroEntity>,
  ) {}

  async criarLivro(livroEntity: LivroEntity) {
    await this.livroRepository.save(livroEntity);
  }
  
  async listarLivros() {
    const listaLivrosSalvos = await this.livroRepository.find();
    const livrosLista = listaLivrosSalvos.map(
      (livro) => new ListaLivroDTO(livro.id, livro.titulo),
    );
    return livrosLista;    
  }

  async recuperarLivro(id: number) {
    const livro = await this.livroRepository.findOne({
      where: { id },
    });
  }

  async atualizarLivro(id: number, updateLivroDto: UpdateLivroDto) {
    const entityName = await this.livroRepository.findOneBy({ id });
    if (!entityName) {
      throw new Error('Livro não encontrado');
    } else {
      Object.assign(entityName, updateLivroDto);
      await this.livroRepository.save(entityName);
    }
  }

  async removerLivro(id: number) {
    await this.livroRepository.delete(id);
  }
}
