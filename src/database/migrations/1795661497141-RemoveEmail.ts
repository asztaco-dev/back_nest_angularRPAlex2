import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveEmail1795661497141 implements MigrationInterface {
    name = 'RemoveEmail1795661497141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
