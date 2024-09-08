/*
  Warnings:

  - Added the required column `informacoes` to the `gados` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gados` ADD COLUMN `informacoes` TEXT NOT NULL;
