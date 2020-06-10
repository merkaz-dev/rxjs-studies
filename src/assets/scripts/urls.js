function getUrls(startDate, endDate) {
  return `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wikistorestitchapp-vgkfz/service/wikiStoreStats/incoming_webhook/s_ch_2_clicks_by_sellers?startDate=${startDate}&endDate=${endDate}&secret=wikistore`;
}

export { getUrls };
