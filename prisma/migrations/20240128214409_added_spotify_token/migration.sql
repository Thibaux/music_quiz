/*
  Warnings:

  - Added the required column `spotify_token` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "spotify_token" TEXT NOT NULL;
