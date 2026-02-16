import { test, expect } from "@playwright/test";

test.describe("Hardware Card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays Pi Camera Node title", async ({ page }) => {
    await expect(page.getByText("Pi Camera Node")).toBeVisible();
  });

  test("displays technical specifications", async ({ page }) => {
    await expect(page.getByText("ESP32 Architecture")).toBeVisible();
    await expect(page.getByText("Custom 4-Layer PCB")).toBeVisible();
    await expect(page.getByText("JLCPCB Manufactured")).toBeVisible();
  });

  test("displays schematics link", async ({ page }) => {
    await expect(page.getByText("View Schematics")).toBeVisible();
  });
});

