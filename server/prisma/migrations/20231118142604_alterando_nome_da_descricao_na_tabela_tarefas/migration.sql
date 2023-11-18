/*
  Warnings:

  - You are about to drop the column `desc` on the `tarefas` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tarefas` DROP COLUMN `desc`,
    ADD COLUMN `descricao` VARCHAR(191) NOT NULL;
