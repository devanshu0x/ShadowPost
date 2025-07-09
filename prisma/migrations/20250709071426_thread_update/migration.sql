/*
  Warnings:

  - You are about to drop the `ThreadContent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `body` to the `Thread` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Thread` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ThreadContent" DROP CONSTRAINT "ThreadContent_threadId_fkey";

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "ThreadContent";
