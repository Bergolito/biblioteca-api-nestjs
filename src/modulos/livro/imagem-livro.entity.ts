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
import { LivroEntity } from './livro.entity';

@Entity({ name: 'imagens_livro' })
export class ImagemLivroEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(
    () => LivroEntity,
    (livro) => livro.imagem,
    {
      orphanedRowAction: 'delete',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'livro_id' })
  livro: LivroEntity;

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
