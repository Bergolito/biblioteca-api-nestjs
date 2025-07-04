import { MigrationInterface, QueryRunner } from "typeorm";

export class criaTabelas202507011751662088501 implements MigrationInterface {
    name = 'criaTabelas202507011751662088501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "imagens_editora" ("id" SERIAL NOT NULL, "titulo" character varying(100) NOT NULL, "conteudo" bytea, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "editora_id" integer, CONSTRAINT "REL_b76ae39ae557e7839a26926a03" UNIQUE ("editora_id"), CONSTRAINT "PK_407ed94a653ec9a33edb75397c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "editoras" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_9974cc858c97fb880c59f85e183" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "imagens_livro" ("id" SERIAL NOT NULL, "titulo" character varying(100) NOT NULL, "conteudo" bytea, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "livro_id" integer, CONSTRAINT "REL_55878c3154f00c62a68c7f86bf" UNIQUE ("livro_id"), CONSTRAINT "PK_8464d35ec9400c46349d8542425" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "livros" ("id" SERIAL NOT NULL, "titulo" character varying(100) NOT NULL, "subtitulo" character varying(70), "edicao" integer, "ano" integer, "isbn" character varying(70), "paginas" integer, "lido" boolean NOT NULL, "idioma" character varying(60), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "autor_id" integer, "editora_id" integer, CONSTRAINT "PK_69daba516e6b0dd45f49c4d8d52" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "autores" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "nacionalidade" character varying(70) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "imagens_autor" ("id" SERIAL NOT NULL, "titulo" character varying(100) NOT NULL, "conteudo" bytea, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "autor_id" integer, CONSTRAINT "REL_cc7d2f0957b7c9db2d8bc42630" UNIQUE ("autor_id"), CONSTRAINT "PK_e63ad1d625a9a2492553c27bc42" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "imagens" ("id" SERIAL NOT NULL, "titulo" character varying(100) NOT NULL, "tipo" integer NOT NULL, "conteudo" bytea, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_7422c88c17289e80e789ce8819c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "email" character varying(70) NOT NULL, "senha" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "imagens_editora" ADD CONSTRAINT "FK_b76ae39ae557e7839a26926a032" FOREIGN KEY ("editora_id") REFERENCES "editoras"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "imagens_livro" ADD CONSTRAINT "FK_55878c3154f00c62a68c7f86bfd" FOREIGN KEY ("livro_id") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "FK_04cc6a5eb11a1f1105d2f796261" FOREIGN KEY ("autor_id") REFERENCES "autores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "FK_c20aee57e1cd35613512abb9fcc" FOREIGN KEY ("editora_id") REFERENCES "editoras"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "imagens_autor" ADD CONSTRAINT "FK_cc7d2f0957b7c9db2d8bc42630c" FOREIGN KEY ("autor_id") REFERENCES "autores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imagens_autor" DROP CONSTRAINT "FK_cc7d2f0957b7c9db2d8bc42630c"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_c20aee57e1cd35613512abb9fcc"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_04cc6a5eb11a1f1105d2f796261"`);
        await queryRunner.query(`ALTER TABLE "imagens_livro" DROP CONSTRAINT "FK_55878c3154f00c62a68c7f86bfd"`);
        await queryRunner.query(`ALTER TABLE "imagens_editora" DROP CONSTRAINT "FK_b76ae39ae557e7839a26926a032"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "imagens"`);
        await queryRunner.query(`DROP TABLE "imagens_autor"`);
        await queryRunner.query(`DROP TABLE "autores"`);
        await queryRunner.query(`DROP TABLE "livros"`);
        await queryRunner.query(`DROP TABLE "imagens_livro"`);
        await queryRunner.query(`DROP TABLE "editoras"`);
        await queryRunner.query(`DROP TABLE "imagens_editora"`);
    }

}
