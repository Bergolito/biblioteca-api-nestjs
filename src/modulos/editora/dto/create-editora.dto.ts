import { IsNotEmpty, IsString } from "class-validator";
import { LivroEntity } from "../../livro/livro.entity";

export class CreateEditoraDto {

    id: number;

    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;

    livro: LivroEntity;
}
