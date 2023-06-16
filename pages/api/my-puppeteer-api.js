import puppeteer from "puppeteer";

export default async function handler(req, res) {
  const browser = await puppeteer.launch();

  // Mở trang Google Form trong trình duyệt
  const page = await browser.newPage();
  await page.goto(
    "https://support.google.com/legal/contact/lr_counternotice?product=websearch"
  );

  const listItems = await page.$$('li[role="option"]');

  // Lặp qua từng phần tử trong danh sách
  for (const listItem of listItems) {
    // Lấy nội dung của phần tử
    const text = await listItem.evaluate((node) => node.textContent);

    // Kiểm tra nội dung và thực hiện hành động cần thiết
    if (text === "Việt Nam") {
      await listItem.click();
      break; // Thoát khỏi vòng lặp sau khi đã thực hiện click
    }
  }

  await page.select("#telCountryInput", "my-value");
  await page.type("#full_name", "KevinLamping");
  await page.type("#your_title", "KevinLamping");
  await page.type("#companyname", "KevinLamping");
  await page.type("#contact_email_noprefill", "dang.mhieu123@gmail.com");
  await page.type("#address", "KevinLamping,123 AAA");
  await page.type("#phone", "0589414233");
  await page.type(
    "#material_location",
    "https://www.youtube.com/watch?v=joTU_ocL5A8&t=312s"
  );

  await page.click("#dmca_clarifications_intro--counternotice.clarify_right", {
    clickCount: 1,
  });
  await page.click("dmca_clarifications_intro--counternotice.clarify_noright", {
    clickCount: 1,
  });

  await page.click("#consent_statement1--dmca_consent_statement", {
    clickCount: 1,
  });
  await page.click("#consent_statement2--dmca_consent_statementtwo", {
    clickCount: 1,
  });

  await page.type("#signature", "Hello world");

  await page.$(".material2-button--filled").click();
  // page.click("#btnLogin");

  await page.screenshot({ path: "example.png" });
  await browser.close();
 
}
