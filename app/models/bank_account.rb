class BankAccount < ApplicationRecord
  validates_presence_of :name, :routing_number
  validates_uniqueness_of :routing_number
  validate :routing_number_is_valid, on: :create

  def balance
    1200
  end

  def routing_number_is_valid
    return if check_sum_passes
    errors.add(:routing_number, 'not a valid routing number')
  end

  private

  def check_sum_passes
    # taken from https://gist.github.com/bmatzelle/5502476
    return false unless routing_number.length == 9
    d = []
    routing_number.each_char { |char| d << char.to_i }

    d[8] == (7 * (d[0] + d[3] + d[6]) +
             3 * (d[1] + d[4] + d[7]) +
             9 * (d[2] + d[5])
            ) % 10
  end
end
