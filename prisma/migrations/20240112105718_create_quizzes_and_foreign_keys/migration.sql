/*
  Warnings:

  - Added the required column `quizzesId` to the `songs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "songs" ADD COLUMN     "quizzesId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "quizzes" (
    "id" SERIAL NOT NULL,
    "usersId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "quizzes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "songs" ADD CONSTRAINT "songs_quizzesId_fkey" FOREIGN KEY ("quizzesId") REFERENCES "quizzes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
