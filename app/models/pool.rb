class Pool < ActiveRecord::Base
  belongs_to :tournament
  has_many :fencers
end
