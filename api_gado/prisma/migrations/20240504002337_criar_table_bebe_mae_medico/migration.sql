-- CreateTable
CREATE TABLE `bebes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(60) NOT NULL,
    `nasc` DATE NOT NULL,
    `peso` SMALLINT NOT NULL,
    `alt` SMALLINT NOT NULL,
    `maeId` INTEGER NOT NULL,
    `medicoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(30) NOT NULL,
    `endereco` VARCHAR(100) NOT NULL,
    `tel` VARCHAR(30) NOT NULL,
    `nasc` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(30) NOT NULL,
    `crm` VARCHAR(100) NOT NULL,
    `tel` VARCHAR(30) NOT NULL,
    `especialidade` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bebes` ADD CONSTRAINT `bebes_maeId_fkey` FOREIGN KEY (`maeId`) REFERENCES `maes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bebes` ADD CONSTRAINT `bebes_medicoId_fkey` FOREIGN KEY (`medicoId`) REFERENCES `medicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
