import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateImagemDto {

  @IsString()
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  titulo: string;  

  @IsOptional()
  @IsNumber()
  tipo: number;

}