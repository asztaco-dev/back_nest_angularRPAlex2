import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailBack1795662029003 implements MigrationInterface {
    name = 'AddEmailBack1795662029003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
