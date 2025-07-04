import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { LivroEntity } from "../../livro/livro.entity";

export class CreateAutorDto {

  id: number;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'A nacionalidade não pode ser vazia' })
  nacionalidade: string;

  livro: LivroEntity;
}
