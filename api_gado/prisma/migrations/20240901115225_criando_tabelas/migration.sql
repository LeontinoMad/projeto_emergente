-- DropForeignKey
ALTER TABLE `gados` DROP FOREIGN KEY `Gados_racasId_fkey`;

-- AddForeignKey
ALTER TABLE `gados` ADD CONSTRAINT `gados_racasId_fkey` FOREIGN KEY (`racasId`) REFERENCES `racas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
