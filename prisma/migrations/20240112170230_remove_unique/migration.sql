-- DropIndex
DROP INDEX "users_spotify_id_key";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "spotify_url" DROP NOT NULL;
