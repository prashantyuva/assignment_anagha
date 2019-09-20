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

ActiveRecord::Schema.define(version: 20190920083156) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "mappings", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_mappings_on_name"
  end

  create_table "questions", force: :cascade do |t|
    t.string "que_text"
    t.integer "priority", default: 1
    t.integer "que_type", default: 0
    t.integer "conditions", default: 0
    t.boolean "required", default: false
    t.integer "role_id"
    t.integer "mapping_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conditions"], name: "index_questions_on_conditions"
    t.index ["mapping_id"], name: "index_questions_on_mapping_id"
    t.index ["priority"], name: "index_questions_on_priority"
    t.index ["que_type"], name: "index_questions_on_que_type"
    t.index ["role_id"], name: "index_questions_on_role_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_roles_on_name"
  end

end
