require 'uri/http'

module Jekyll
  module GetWebsiteDomain
    def get_website_domain(href)
      uri    = URI.parse(href)
      domain = PublicSuffix.parse(uri.host)
      domain.domain
    end
  end
end

Liquid::Template.register_filter(Jekyll::GetWebsiteDomain)
