import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays GitHub link", async ({ page }) => {
    const githubLink = page.getByLabel("Visit Andrew Xiong's GitHub profile");
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/novuxx888"
    );
  });

  test("displays LinkedIn link", async ({ page }) => {
    const linkedinLink = page.getByLabel(
      "Visit Andrew Xiong's LinkedIn profile"
    );
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/andrew-xiong-767aa5213/"
    );
  });

  test("displays Email link", async ({ page }) => {
    const emailLink = page.getByLabel("Send an email to Andrew Xiong");
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute(
      "href",
      "mailto:andrewxiong@ucsb.edu"
    );
  });
});

