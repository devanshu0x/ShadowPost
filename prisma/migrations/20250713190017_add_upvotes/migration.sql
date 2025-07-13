/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `publishDate` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "imageUrl",
ADD COLUMN     "publishDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "downvotes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "upvotes" INTEGER NOT NULL DEFAULT 0;
