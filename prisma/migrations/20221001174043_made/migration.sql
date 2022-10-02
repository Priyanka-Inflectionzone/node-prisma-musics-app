-- DropForeignKey
ALTER TABLE `single` DROP FOREIGN KEY `Single_artistId_fkey`;

-- AlterTable
ALTER TABLE `single` MODIFY `artistId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Single` ADD CONSTRAINT `Single_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `Artist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
