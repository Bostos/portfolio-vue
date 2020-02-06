import VueRouterSitemap      from 'vue-router-sitemap';
import path                  from 'path';
import VueRouter             from 'vue-router'

export const sitemapMiddleware = () => {
  return (req, res) => {
    res.set('Content-Type', 'application/xml');

    const staticSitemap = path.resolve('dist/static', 'sitemap.xml');
    const filterConfig = {
      isValid: false,
      rules: [
        /\/example-page/,
        /\*/,
      ],
    };

    new VueRouterSitemap(VueRouter).filterPaths(filterConfig).build('https://nikolastamenkovski.netlify.com').save(staticSitemap);

    return res.sendFile(staticSitemap);
  };
};

app.get('/sitemap.xml', sitemapMiddleware());