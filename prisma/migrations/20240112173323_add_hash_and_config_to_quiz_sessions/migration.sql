/*
  Warnings:

  - Added the required column `config` to the `quiz_sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hash` to the `quiz_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quiz_sessions"
ADD COLUMN     "config" JSONB NOT NULL,
ADD COLUMN     "hash" TEXT NOT NULL;
