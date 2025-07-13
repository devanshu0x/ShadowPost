/*
  Warnings:

  - Added the required column `publishDate` to the `Thread` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "publishDate" TIMESTAMP(3) NOT NULL;
