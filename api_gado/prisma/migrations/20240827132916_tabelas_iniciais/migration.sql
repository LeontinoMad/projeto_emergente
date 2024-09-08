/*
  Warnings:

  - You are about to drop the `carros` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `marcas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `carros` DROP FOREIGN KEY `carros_marcaId_fkey`;

-- DropTable
DROP TABLE `carros`;

-- DropTable
DROP TABLE `marcas`;

-- CreateTable
CREATE TABLE `racass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(60) NOT NULL,
    `nasc` SMALLINT NOT NULL,
    `preco` DECIMAL(10, 2) NOT NULL,
    `peso` DECIMAL(10, 3) NOT NULL,
    `destaque` BOOLEAN NOT NULL DEFAULT true,
    `foto` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `sexo` ENUM('MACHO', 'FEMEA') NOT NULL DEFAULT 'MACHO',
    `racasId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gados` ADD CONSTRAINT `Gados_racasId_fkey` FOREIGN KEY (`racasId`) REFERENCES `racass`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
