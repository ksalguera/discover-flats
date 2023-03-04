class Property < ApplicationRecord
  # set user as optional to allow for seed data
  belongs_to :user, optional: true
  has_many :images
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  
  validates :name, { presence: true, uniqueness: true }
  validates :affordability, inclusion: { in: ['affordable', 'midrange', 'luxury'] }
  validates :description, { presence: true, length: { minimum: 20, maximum: 500 } }
  validates :website, { presence: true, uniqueness: true, url: true }
  validates :phone_number, { presence: true, length: {is: 10 } }
  validates :address_line_one, { presence: true, length: { minimum: 2, maximum: 30 } }
  validates :address_line_two, length: { maximum: 15 }
  validates :city, { presence: true, length: { minimum: 2, maximum: 17 } }
  validates :state, { presence: true, length: { is: 2 } }
  validates :zip, { presence: true, length: { is: 5 } }
  validates :image_url, { presence: true, url: true } 
  validates :dogs_allowed, inclusion: [true, false]
  validates :cats_allowed, inclusion: [true, false]
  validates :pet_limit, { presence: true, if: lambda { |property| property.dogs_allowed || property.cats_allowed }, inclusion:  { in: 1..10 } }
  validates :admin_fee, { presence: true, inclusion: { in: 0..400 } }
  validates :application_fee, { presence: true, inclusion: { in: 0..400 } }

  private
  
  # compiles full address
  def full_address
    if self.address_line_two.nil? || self.address_line_two == ''
      "#{self.address_line_one}, #{self.city}, #{self.state} #{self.zip}"
    else
      "#{self.address_line_one} #{self.address_line_two}, #{self.city}, #{self.state} #{self.zip}"
    end
  end

end