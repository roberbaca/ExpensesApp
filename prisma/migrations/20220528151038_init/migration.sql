/*
  Warnings:

  - You are about to drop the `_CategoryToExpense` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToExpense" DROP CONSTRAINT "_CategoryToExpense_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToExpense" DROP CONSTRAINT "_CategoryToExpense_B_fkey";

-- DropTable
DROP TABLE "_CategoryToExpense";

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
