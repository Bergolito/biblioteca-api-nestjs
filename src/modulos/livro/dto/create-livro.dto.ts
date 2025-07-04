import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { LivroEntity } from "../livro.entity";

export class AutorDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do autor não pode ser vazio' })
  nome: string;

  livro: LivroEntity;
}

export class EditoraDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome da editora não pode ser vazio' })
  nome: string;

  livro: LivroEntity;
}

export class CreateLivroDto {
  @IsString()
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  titulo: string;  

  @IsOptional()
  @IsString()
  subtitulo: string;  

  @IsOptional()
  @IsNumber()
  edicao: number;

  @IsOptional()
  @IsNumber()
  ano: number;
  
  @IsOptional()
  @IsString()
  isbn: string;

  @IsOptional()
  @IsNumber()
  paginas: number;

  @IsOptional()
  @Type(() => AutorDTO)
  autor: AutorDTO;
  
  @IsOptional()
  @Type(() => EditoraDTO)
  editora: EditoraDTO;
}