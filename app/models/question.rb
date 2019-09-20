class Question < ApplicationRecord
  belongs_to :mapping
  belongs_to :role

  def as_json(*)
    {
      id: id,
      appears: appears,
      conditions: conditions,
      frequency: frequency,
      mapping: mapping.name,
      priority: priority,
      que_text: que_text,
      que_type: que_type,
      required: required.to_s.titleize,
      role: role.name,
      teaming_stages: teaming_stages
    }   
  end
end
