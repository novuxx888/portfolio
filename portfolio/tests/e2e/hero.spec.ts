import { test, expect } from "@playwright/test";

test.describe("Hero Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays the headline", async ({ page }) => {
    const headline = page.getByRole("heading", {
      name: /Building the Infrastructure for Agentic AI/i,
    });
    await expect(headline).toBeVisible();
  });

  test("displays the subtitle", async ({ page }) => {
    await expect(
      page.getByText(/Andrew Xiong\. CEO @ Knyte\. Hardware Engineer\. Builder\./i)
    ).toBeVisible();
  });

  test("displays View Knyte button", async ({ page }) => {
    const button = page.getByRole("link", { name: /View Knyte/i });
    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute("href", "https://knyte.net");
  });

  test("displays Engineering Logs button", async ({ page }) => {
    const button = page.getByRole("link", { name: /Engineering Logs/i });
    await expect(button).toBeVisible();
  });
});

