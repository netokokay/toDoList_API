import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668054480025 implements MigrationInterface {
    name = 'default1668054480025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "task" character varying NOT NULL, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "items"`);
    }

}
