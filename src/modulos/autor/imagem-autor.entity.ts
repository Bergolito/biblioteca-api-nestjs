import { AutorEntity } from './autor.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'imagens_autor' })
export class ImagemAutorEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(
    () => AutorEntity,
    (autor) => autor.imagem,
    {
      orphanedRowAction: 'delete',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'autor_id' })
  autor: AutorEntity;

  @Column({ name: 'titulo', length: 100, nullable: false })
  titulo: string;

  @Column({ name: 'conteudo', type: 'bytea', nullable: true })
  conteudo: Buffer;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
