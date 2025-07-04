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
} from 'typeorm';

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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
