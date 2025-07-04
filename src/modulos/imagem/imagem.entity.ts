import { AutorEntity } from '../autor/autor.entity';
import { EditoraEntity } from '../editora/editora.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'imagens' })
export class ImagemEntity {

/*   @PrimaryGeneratedColumn('uuid')
  id: string;
 */  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'titulo', length: 100, nullable: false })
  titulo: string;

  @Column({ name: 'tipo', nullable: false })
  tipo: number;

  @Column({ name: 'conteudo', type: 'bytea', nullable: true })
  conteudo: Buffer;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
