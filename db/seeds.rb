puts 'Seeding Database'
property_description_one = "Artistry is a creatively revitalized mixed use campus in the Cole Noble district of downtown Indianapolis. Its architecture, modern features and appreciation for the arts is bound by the community's history of craft and skill. The main building features five stories of urban apartment homes and up to 68,000 square feet of commercial office space. With the addition of Mentor, Muse & Mosaic, the four building campus provides more living options to fit different lifestyles, including eco-suites for those who need minimal space. With a fun and creative atmosphere, Artistry allows your life to become a work of art."

# properties 
Property.create(
  name: 'Artistry Indy',
  image_url: 'https://artistryindy.com/assets/images/cache/Artistry-Photo-4-6dcbfc5ae8caeb4deac537d0468ada9c.jpg',
  website: 'https://artistryindy.com/',
  phone_number_unformatted: 3176027171,
  address_line_one: '451 E Market Street',
  address_line_two: nil,
  city: 'Indianapolis',
  state: 'IN',
  zip: 46204,
  description: property_description_one, 
  pet_limit: 2,
  dogs_allowed: 1,
  dog_restrictions: 'None',
  dog_fee: 25, 
  dog_deposit: 200, 
  cats_allowed: 1,
  cat_restrictions: 'None',
  cat_fee: 25,
  cat_deposit: 200,
  application_fee: 50,
  admin_fee: 150
)

# variables for seeds

puts 'Seeding Complete'