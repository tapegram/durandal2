class Fencer < ActiveRecord::Base
  belongs_to :tournament
  belongs_to :pool
end
