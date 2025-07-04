import { LivroEntity } from '../livro/livro.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ImagemAutorEntity } from './imagem-autor.entity';

@Entity({ name: 'autores' })
export class AutorEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'nacionalidade', length: 70, nullable: false })
  nacionalidade: string;

  @OneToMany(() => LivroEntity, (livro) => livro.editora, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })  
  livros: LivroEntity[]; 

  @OneToOne(() => ImagemAutorEntity, (imagem) => imagem.autor, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })  
  imagem: ImagemAutorEntity; 

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
