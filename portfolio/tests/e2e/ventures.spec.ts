import { test, expect } from "@playwright/test";

test.describe("Ventures Card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays Knyte Inc. title", async ({ page }) => {
    await expect(page.getByText("Knyte Inc.")).toBeVisible();
  });

  test("displays current status", async ({ page }) => {
    await expect(
      page.getByText(/Current \(Founder\/CEO\)/i)
    ).toBeVisible();
  });

  test("displays description", async ({ page }) => {
    await expect(
      page.getByText(/Managed cloud infrastructure/i)
    ).toBeVisible();
  });

  test("displays Y Combinator metadata", async ({ page }) => {
    await expect(
      page.getByText(/Y Combinator W26 Applicant/i)
    ).toBeVisible();
  });
});

