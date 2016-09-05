class Tournament < ActiveRecord::Base
    has_many :fencers
    has_many :pools
    
    def as_json(options = {})
        super(options.merge(include: :fencers))
    end
end
