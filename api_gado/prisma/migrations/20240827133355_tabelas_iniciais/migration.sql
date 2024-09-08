/*
  Warnings:

  - You are about to drop the `racass` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `gados` DROP FOREIGN KEY `Gados_racasId_fkey`;

-- DropTable
DROP TABLE `racass`;

-- CreateTable
CREATE TABLE `racas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gados` ADD CONSTRAINT `Gados_racasId_fkey` FOREIGN KEY (`racasId`) REFERENCES `racas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
