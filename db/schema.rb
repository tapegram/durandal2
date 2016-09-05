# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160905182050) do

  create_table "fencers", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "rating"
    t.string   "rating_year"
    t.integer  "tournament_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "pool_id"
  end

  add_index "fencers", ["pool_id"], name: "index_fencers_on_pool_id"
  add_index "fencers", ["tournament_id"], name: "index_fencers_on_tournament_id"

  create_table "pools", force: :cascade do |t|
    t.integer  "number"
    t.integer  "strip"
    t.integer  "tournament_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "pools", ["tournament_id"], name: "index_pools_on_tournament_id"

  create_table "tournaments", force: :cascade do |t|
    t.string   "name"
    t.string   "weapon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
