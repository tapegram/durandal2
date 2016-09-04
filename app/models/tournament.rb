class Tournament < ActiveRecord::Base
    has_many :fencers
    
    def as_json(options = {})
        super(options.merge(include: :fencers))
    end
end
