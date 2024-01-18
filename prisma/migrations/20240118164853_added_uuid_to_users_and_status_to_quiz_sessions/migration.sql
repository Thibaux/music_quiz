/*
  Warnings:

  - Added the required column `status` to the `quiz_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quiz_sessions" ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "uuid" UUID NOT NULL DEFAULT gen_random_uuid();
