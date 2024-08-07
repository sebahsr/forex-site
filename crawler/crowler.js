const puppeteer = require("puppeteer");
const { doc, setDoc } = require("firebase/firestore");
const { db } = require("./firebase");
const { collection, addDoc } = require("firebase/firestore");
async function getForexRates() {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the bank's forex page
  await page.goto("https://www.combanketh.et/en/exchange-rate", {
    waitUntil: "networkidle2",
  });

  // Wait for the necessary elements to load (adjust selector as necessary)
  await page.waitForSelector("table");
  // Extract forex rates from the page
  const rates = await page.evaluate(() => {
    const rows = document.querySelectorAll("table tr");
    const data = [];
    rows.forEach((row, index) => {
      if (index === 0) return; // Skip header row
      const cells = row.querySelectorAll("td");
      const currency = cells[0].innerText.trim().replace(/\n.*/, "");
      console.log(true);
      console.log(currency, "sebah");
      const cahshBuyrate = parseFloat(cells[1].innerText.trim());
      const cahshSellrate = parseFloat(cells[2].innerText.trim());
      const transactionalBuyrate = parseFloat(cells[3].innerText.trim());
      const transactionalsellrate = parseFloat(cells[4].innerText.trim());
      data.push({name:currency,
          cashBuyRate: cahshBuyrate,
          cashSellRate: cahshSellrate,
          TansactionBuyRate: transactionalBuyrate,
          TansactionSellRate: transactionalsellrate,
        })
    });
    console.log(data);
    return data;
  });

  // Close the browser
  await browser.close();

  return rates;
}
async function storeForexRates(rates) {
  try {
    const timestamp = new Date().toISOString().split("T")[0];
    await setDoc(doc(db, "forexRates", timestamp), {
      date: timestamp,
      rates: rates,
    });
    console.log("Forex rates stored successfully");
  } catch (error) {
    console.error("Error storing forex rates:", error);
  }
}
// Example usage
getForexRates()
  .then((rates) =>
    storeForexRates([
      { name: "Commercial Bank Of Ethiopia", currencies: rates },
      { name: "BOA", currencies: rates },
    ])
  )
  .catch(console.error);
