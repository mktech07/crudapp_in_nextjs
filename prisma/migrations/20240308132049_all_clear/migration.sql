/*
  Warnings:

  - You are about to drop the `_tagsTotodo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `todo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_tagsTotodo` DROP FOREIGN KEY `_tagsTotodo_A_fkey`;

-- DropForeignKey
ALTER TABLE `_tagsTotodo` DROP FOREIGN KEY `_tagsTotodo_B_fkey`;

-- DropForeignKey
ALTER TABLE `todo` DROP FOREIGN KEY `todo_userID_fkey`;

-- DropTable
DROP TABLE `_tagsTotodo`;

-- DropTable
DROP TABLE `tags`;

-- DropTable
DROP TABLE `todo`;
