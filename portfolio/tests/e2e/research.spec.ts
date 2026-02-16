import { test, expect } from "@playwright/test";

test.describe("Research Card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays Machine Learning title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Machine Learning" })
    ).toBeVisible();
  });

  test("displays focus areas", async ({ page }) => {
    await expect(page.getByText("Data Preprocessing")).toBeVisible();
    await expect(page.getByText("Binary Classification")).toBeVisible();
    await expect(page.getByText("Decision Tree Logic")).toBeVisible();
  });
});

