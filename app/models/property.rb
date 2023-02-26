class Property < ApplicationRecord
  # set user as optional to allow for seed data
  belongs_to :user, optional: true
  has_many :images
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  validates :name, { presence: true, uniqueness: true }
  validates :affordability, inclusion: { in: ['affordable', 'midrange', 'luxury'] }
  validates :description, { presence: true, length: { minimum: 20, maximum: 350 } }
  validates :website, { presence: true, uniqueness: true }
  validates :phone_number_unformatted, { presence: true, length: {is: 10 } }
  validates :address_line_one, { presence: true, length: { minimum: 2, maximum: 30 } }
  validates :address_line_two, length: { maximum: 15 }
  validates :city, { presence: true, length: { minimum: 2, maximum: 17 } }
  validates :state, { presence: true, length: { is: 2 } }
  validates :zip, { presence: true, length: { is: 5 } }
  validates :image_url, presence: true
  validates :dogs_allowed, inclusion: [true, false]
  validates :dog_restrictions, presence: true, if: :dogs_allowed
  validates :dog_fee, { presence: true, if: :dogs_allowed, inclusion: { in: 1..100 } }
  validates :dog_deposit, { presence: true, if: :dogs_allowed, inclusion: { in: 1..700 } }
  validates :cats_allowed, inclusion: [true, false]
  validates :cat_restrictions, presence: true, if: :cats_allowed
  validates :cat_fee, { presence: true, if: :cats_allowed, inclusion: { in: 1..100 } }
  validates :cat_deposit, { presence: true, if: :cats_allowed, inclusion: { in: 1..700 } }
  validates :pet_limit, { presence: true, if: lambda { |property| property.dogs_allowed || property.cats_allowed }, inclusion:  { in: 1..10 } }
  validates :admin_fee, { presence: true, inclusion: { in: 1..400 } }
  validates :application_fee, { presence: true, inclusion: { in: 1..400 } }

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