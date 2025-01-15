import { Page, expect, test } from '@playwright/test';

const TESTS: Array<{ id: string; play?: (page: Page) => Promise<void> }> = [
  { id: 'complete' },
  { id: 'custom-renderer' },
  { id: 'demo' },
  { id: 'drag-n-drop' },
  { id: 'events' },
  { id: 'external' },
  { id: 'layout-circular' },
  { id: 'layout-fa2-control' },
  { id: 'load-graph-hook' },
  { id: 'load-graph-prop' },
  { id: 'multi-directed' },
  { id: 'multi' },
  { id: 'node-border' },
  { id: 'edge-curve' },
  { id: 'graph-search' },
  { id: 'minimap' },
];

function getTestUrl(id: string): string {
  return `/iframe.html?args=&id=${id}--default&viewMode=story&seed=foo&faTime=-1`;
}
TESTS.forEach(({ id, play }) => {
  test(`Screenshot for "${id}"`, async ({ page }) => {
    await page.goto(getTestUrl(id), { waitUntil: 'networkidle' });
    if (play) await play(page);
    await expect(page).toHaveScreenshot(`${id}.png`, {
      maxDiffPixels: 2,
      timeout: 10000,
    });
  });
});
