/*
  Warnings:

  - You are about to drop the column `nasc` on the `gados` table. All the data in the column will be lost.
  - Added the required column `idade` to the `Gados` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gados` DROP COLUMN `nasc`,
    ADD COLUMN `idade` VARCHAR(30) NOT NULL;
