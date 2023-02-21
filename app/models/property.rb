class Property < ApplicationRecord
  has_many :images
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  validates :name, presence: true
  validates :affordability, inclusion: { in: ['affordable', 'midrange', 'luxury'] }

  private

  # formats phone_number
  def phone_number
    self.phone_number_unformatted.insert(0, '(').insert(4, ')').insert(5,' ').insert(9,'-')
  end
  
  # compiles full address
  def full_address
    if self.address_line_two.nil? 
      "#{self.address_line_one}, #{self.city}, #{self.state} #{self.zip}"
    else
      "#{self.address_line_one} #{self.address_line_two}, #{self.city}, #{self.state} #{self.zip}"
    end
  end

end
