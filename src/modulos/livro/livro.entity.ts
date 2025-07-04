import { AutorEntity } from '../autor/autor.entity';
import { EditoraEntity } from '../editora/editora.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ImagemLivroEntity } from './imagem-livro.entity';

@Entity({ name: 'livros' })
export class LivroEntity {

/*   @PrimaryGeneratedColumn('uuid')
  id: string;
 */
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'titulo', length: 100, nullable: false })
  titulo: string;

  @Column({ name: 'subtitulo', length: 70, nullable: true })
  subtitulo: string;

  @Column({ name: 'edicao', nullable: true })
  edicao: number;

  @Column({ name: 'ano', nullable: true })
  ano: number;

  @Column({ name: 'isbn', length: 70, nullable: true })
  isbn: string;

  @Column({ name: 'paginas', nullable: true })
  paginas: number;

  @Column({ name: 'lido', nullable: false })
  lido: boolean;

  @Column({ name: 'idioma', length: 60, nullable: true })
  idioma: string;

  @ManyToOne(
    () => AutorEntity,
    (autor) => autor.livros,
    {
      orphanedRowAction: 'delete',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'autor_id' })
  autor: AutorEntity;
  
  @ManyToOne(
    () => EditoraEntity,
    (editora) => editora.livros,
    {
      orphanedRowAction: 'delete',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }  
  )
  @JoinColumn({ name: 'editora_id' }) 
  editora: EditoraEntity;

  @OneToOne(() => ImagemLivroEntity, (imagem) => imagem.livro, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })  
  imagem: ImagemLivroEntity; 

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
