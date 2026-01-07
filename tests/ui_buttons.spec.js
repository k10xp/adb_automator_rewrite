// tests/adb-automator.spec.js
import { test, expect } from "@playwright/test";

test.describe("ADB Automator UI", () => {
  const appUrl = "http://localhost:5173/";

  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
  });

  test("Click Commands button", async ({ page }) => {
    //select commands and run
    await page.locator('label:has-text("Screen On") input').check();
    await page.locator('label:has-text("Wifi On") input').check();

    await page.click("#runCommandsBtn");

    //confirm
    const outputText = await page.locator(".commands-output-text").innerText();
    expect(outputText).toContain("Running: Screen On");
    expect(outputText).toContain("Running: Wifi On");
  });

  test("Confirm no commands selected", async ({ page }) => {
    await page.click("#runCommandsBtn");

    const outputText = await page.locator(".commands-output-text").innerText();
    expect(outputText.trim()).toContain("No commands selected.");
  });

  test("Click Clear button", async ({ page }) => {
    await page.locator('label:has-text("Send SMS") input').check();
    await page.click("#runCommandsBtn");

    await page.click("#clearBtn");

    //confirm cleared
    const boxes = await page.locator(
      '.commands-checkbox-container input[type="checkbox"]'
    );
    const checkedStates = await boxes.evaluateAll((els) =>
      els.map((cb) => cb.checked)
    );
    expect(checkedStates.every((s) => s === false)).toBe(true);

    //confirm reset to placeholder
    const lines = await page
      .locator(".commands-output-text p")
      .allTextContents();
    expect(lines).toEqual(["Line 1", "Line 2", "Line 3"]);
  });

  //expect alert
  test("Click Help button", async ({ page }) => {
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Select commands");
      await dialog.dismiss();
    });

    await page.click("#helpBtn");
  });
});
