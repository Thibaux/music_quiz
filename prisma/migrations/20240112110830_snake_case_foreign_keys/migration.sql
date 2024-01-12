/*
  Warnings:

  - You are about to drop the column `usersId` on the `quizzes` table. All the data in the column will be lost.
  - You are about to drop the column `quizzesId` on the `songs` table. All the data in the column will be lost.
  - Added the required column `users_id` to the `quizzes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizzes_id` to the `songs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "quizzes" DROP CONSTRAINT "quizzes_usersId_fkey";

-- DropForeignKey
ALTER TABLE "songs" DROP CONSTRAINT "songs_quizzesId_fkey";

-- AlterTable
ALTER TABLE "quizzes" DROP COLUMN "usersId",
ADD COLUMN     "users_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "songs" DROP COLUMN "quizzesId",
ADD COLUMN     "quizzes_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "songs" ADD CONSTRAINT "songs_quizzes_id_fkey" FOREIGN KEY ("quizzes_id") REFERENCES "quizzes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
