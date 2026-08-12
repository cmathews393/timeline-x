-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "marvelunlimitedurl" TEXT;

-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "marvelunlimitedurl" TEXT;

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterToSeries" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CharacterToSeries_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CharacterToVolume" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CharacterToVolume_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CharacterToSeries_B_index" ON "_CharacterToSeries"("B");

-- CreateIndex
CREATE INDEX "_CharacterToVolume_B_index" ON "_CharacterToVolume"("B");

-- AddForeignKey
ALTER TABLE "_CharacterToSeries" ADD CONSTRAINT "_CharacterToSeries_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToSeries" ADD CONSTRAINT "_CharacterToSeries_B_fkey" FOREIGN KEY ("B") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToVolume" ADD CONSTRAINT "_CharacterToVolume_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToVolume" ADD CONSTRAINT "_CharacterToVolume_B_fkey" FOREIGN KEY ("B") REFERENCES "Volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
