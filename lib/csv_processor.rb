module CsvProcessor
  # TODO
  HEADERS = ['Pri', 'Question', 'Teaming Stages', 'Appears (Day)', 'Frequency', 'Type', 'Role', 'Required?', 'Conditions', 'Mapping']
  class Processor
    require 'csv'
    def initialize (file, options={})
      @file = file
    end

    def process
      CSV.foreach(@file.path, headers: false).with_index do |row, ii| 
        if ii.zero?
          if row == HEADERS
            puts 'headers matching' 
          else
            raise "unmatched Headers"
          end
        else
          puts row.class
          priority, que_text, teaming_stages, appears, frequency, que_type, role_name, required, conditions, map_key = row
          mapping = Mapping.find_or_create_by(name: map_key)
          role = Role.find_or_create_by(name: role_name)

          Question.find_or_create_by(
            priority: priority,
            que_text: que_text,
            teaming_stages: teaming_stages,
            appears: appears,
            frequency: frequency,
            que_type: que_type,
            required: required,
            conditions: conditions,
            role_id: role.id,
            mapping_id: mapping.id
          )
        end
      end
    end
  end

end
