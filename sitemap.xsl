<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="en"><head><title>Sitemap — SPIN Unit</title>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
 body{font:14px/1.5 ui-monospace,'SF Mono',Menlo,monospace;background:#f9f9f8;
  color:#2a2859;margin:0;padding:28px 22px}
 h1{font:700 20px/1.2 'Arial Narrow',Arial,sans-serif;letter-spacing:.05em;
  text-transform:uppercase;margin:0 0 4px}
 p.n{color:#6a6a86;margin:0 0 22px;font-size:12px}
 table{border-collapse:collapse;width:100%;max-width:1100px}
 th{text-align:left;font-size:10px;letter-spacing:.12em;text-transform:uppercase;
  color:#6a6a86;border-bottom:1.5px solid #2a2859;padding:0 10px 7px 0;font-weight:400}
 td{padding:7px 10px 7px 0;border-bottom:1px solid rgba(42,40,89,.09);
  font-size:12.5px;vertical-align:top}
 td.m{color:#7c8b98;white-space:nowrap}
 a{color:#dce4ea} a:hover{background:#f2bb4d;color:#0e1620}
</style></head><body>
<h1>SPIN Unit — sitemap</h1>
<p class="n"><xsl:value-of select="count(s:urlset/s:url)"/> URLs. This is the
machine-readable index submitted to search engines; the stylesheet is only here
so it can be read.</p>
<table><tr><th>URL</th><th>Updated</th><th>Changes</th><th>Priority</th></tr>
<xsl:for-each select="s:urlset/s:url">
<tr><td><a><xsl:attribute name="href"><xsl:value-of select="s:loc"/></xsl:attribute>
<xsl:value-of select="s:loc"/></a></td>
<td class="m"><xsl:value-of select="s:lastmod"/></td>
<td class="m"><xsl:value-of select="s:changefreq"/></td>
<td class="m"><xsl:value-of select="s:priority"/></td></tr>
</xsl:for-each>
</table></body></html>
</xsl:template></xsl:stylesheet>
