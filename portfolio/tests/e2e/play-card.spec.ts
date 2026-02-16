import { test, expect } from "@playwright/test";

test.describe("Play Card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test('displays Creative label', async ({ page }) => {
    await expect(page.getByText("Creative")).toBeVisible();
  });

  test("reveals Detective Raccoon on hover", async ({ page }) => {
    const card = page.getByRole("button", {
      name: /Creative.*Detective Raccoon/i,
    });
    await card.hover();
    await expect(page.getByText("Detective Raccoon")).toBeVisible();
  });
});

