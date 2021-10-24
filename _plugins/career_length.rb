require 'time_diff'

module Jekyll
  module CareerLengthInYears
    def career_length_in_years(date_from)
      date_to = Time.now
      Time.diff(date_from, date_to)[:year]
    end
  end
end

Liquid::Template.register_filter(Jekyll::CareerLengthInYears)
