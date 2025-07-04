import { Injectable } from '@nestjs/common';
import { UpdateImagemDto } from './dto/update-imagem.dto';
import { ImagemEntity } from './imagem.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListaImagemDTO } from './dto/lista-imagem.dto';

@Injectable()
export class ImagemService {

  constructor(
    @InjectRepository(ImagemEntity)
    private readonly imagemRepository: Repository<ImagemEntity>,
  ) {}

  async criarImagem(imagemEntity: ImagemEntity) {
    await this.imagemRepository.save(imagemEntity);
  }

  async listarImagens() {
    const listaImagensSalvas = await this.imagemRepository.find();
    const imagensLista = listaImagensSalvas.map(
      (imagem) => new ListaImagemDTO(imagem.id, imagem.titulo),
    );
    return imagensLista;    
  }

  async recuperarImagem(id: number) {
    const imagem = await this.imagemRepository.findOne({
      where: { id },
    });
  }

  async atualizarImagem(id: number, updateImagemDto: UpdateImagemDto) {
    const entityName = await this.imagemRepository.findOneBy({ id });
    if (!entityName) {
      throw new Error('Imagem não encontrada');
    } else {
      Object.assign(entityName, updateImagemDto);
      await this.imagemRepository.save(entityName);
    }
  }

  async removerImagem(id: number) {
    await this.imagemRepository.delete(id);
  }
}
