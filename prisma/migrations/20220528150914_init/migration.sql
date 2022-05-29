-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_categoryId_fkey";

-- CreateTable
CREATE TABLE "_CategoryToExpense" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToExpense_AB_unique" ON "_CategoryToExpense"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToExpense_B_index" ON "_CategoryToExpense"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToExpense" ADD CONSTRAINT "_CategoryToExpense_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToExpense" ADD CONSTRAINT "_CategoryToExpense_B_fkey" FOREIGN KEY ("B") REFERENCES "Expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;
