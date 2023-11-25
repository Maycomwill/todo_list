/*
  Warnings:

  - Added the required column `concluido` to the `Tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tarefas` ADD COLUMN `concluido` BOOLEAN NOT NULL;
