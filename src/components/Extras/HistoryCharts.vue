<template>
  <div class="w-full px-2">
    <div class="w-full mx-auto mt-2 overflow-auto">
      <div class="w-full" style="height: 490px; overflow: hidden">
        <div class="w-full px-2" style="height: 490px">
          <iframe
            allowtransparency="true"
            frameborder="0"
            class="w-full"
            src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A1000%2C%22height%22%3A490%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22light%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D"
            style="box-sizing: border-box; height: calc(458px)"
          ></iframe>
          <div class="text-center text-sm bg-white py-2 text-slate-400">
            <a
              href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/"
              rel="noopener"
              target="_blank"
              ><span class="text-blue-700">Cryptocurrency Markets</span></a
            >
            by TradingView
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryCharts",
};
</script>

<style></style>
