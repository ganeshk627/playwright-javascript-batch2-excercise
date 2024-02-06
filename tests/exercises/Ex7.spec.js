// @ts-check
import { expect, test } from '@playwright/test'


test('Single file upload', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    const fileToUpload = 'upload1.png';

    await page.locator('#file-upload').setInputFiles(fileToUpload).then(async () => {
        await page.locator('#file-submit').click();
        await expect(page.locator('#uploaded-files')).toHaveText(fileToUpload);
    });

});

test('Multiple file upload', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    const filesToUpload = ['upload1.png', 'upload2.png'];

    await page.locator('#filesToUpload').setInputFiles(filesToUpload).then(async () => {
        await expect(page.locator('#fileList li')).toHaveCount(2);
    });

});
