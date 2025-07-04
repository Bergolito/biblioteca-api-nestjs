import { EditoraEntity } from './editora.entity';
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

@Entity({ name: 'imagens_editora' })
export class ImagemEditoraEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(
    () => EditoraEntity,
    (editora) => editora.imagem,
    {
      orphanedRowAction: 'delete',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'editora_id' })
  editora: EditoraEntity;

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
