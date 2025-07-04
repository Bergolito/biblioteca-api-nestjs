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
import { ImagemEditoraEntity } from './imagem-editora.entity';

@Entity({ name: 'editoras' })
export class EditoraEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

   @OneToMany(() => LivroEntity, (livro) => livro.editora, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })  
  livros: LivroEntity[]; 

  @OneToOne(() => ImagemEditoraEntity, (imagem) => imagem.editora, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })  
  imagem: ImagemEditoraEntity; 

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
