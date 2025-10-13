/*
  Warnings:

  - The values [female] on the enum `MaleOrFemale` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MaleOrFemale_new" AS ENUM ('Male', 'Female');
ALTER TABLE "Pet" ALTER COLUMN "gender" TYPE "MaleOrFemale_new" USING ("gender"::text::"MaleOrFemale_new");
ALTER TYPE "MaleOrFemale" RENAME TO "MaleOrFemale_old";
ALTER TYPE "MaleOrFemale_new" RENAME TO "MaleOrFemale";
DROP TYPE "public"."MaleOrFemale_old";
COMMIT;
