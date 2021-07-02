const config = {};

config.redflagUrl = 'https://web-scraper-spring-app.herokuapp.com/redflagdeals';

config.redflagSiteContent =
  'dd.total_count.total_count_selector,div.post_preview_body,h3.topictitle';
config.redflagSiteLinks = 'a.topic_title_link';
config.minLikes = 2;

module.exports = config;
