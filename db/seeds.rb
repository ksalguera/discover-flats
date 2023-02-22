puts 'Seeding Database'

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
  description: "Artistry is a creatively revitalized mixed use campus in the Cole Noble district of downtown Indianapolis. 
  Its architecture, modern features and appreciation for the arts is bound by the community's history of craft and skill. 
  The main building features five stories of urban apartment homes and up to 68,000 square feet of commercial office space.", 
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
  admin_fee: 150,
  affordability: 'luxury',
  user_id: 0
)

Property.create(
  name: 'Industry',
  image_url: 'https://industry-indianapolis.com/wp-content/uploads/2023/01/20220921-CSP-INDIANAPOLIS-POOL-2-scaled.jpeg',
  website: 'https://industry-indianapolis.com/',
  phone_number_unformatted: 4632096448,
  address_line_one: '421 N Pennsylvania St',
  address_line_two: nil,
  city: 'Indianapolis',
  state: 'IN',
  zip: 46204,
  description: 'Industry Indianapolis redefines luxury living with its brand-new alcove, one, two, and three-bedroom 
  apartments, and townhomes. Residents enjoy access to the coveted Mass Ave District as well as resort-quality amenities.', 
  pet_limit: 2,
  dogs_allowed: 1,
  dog_restrictions: 'Non-aggressive breeds only. Please contact the leasing office for full pet details.',
  dog_fee: 30, 
  dog_deposit: 300, 
  cats_allowed: 1,
  cat_restrictions: 'None',
  cat_fee: 30,
  cat_deposit: 300,
  application_fee: 50,
  admin_fee: 200,
  affordability: 'luxury',
)

Property.create(
  name: 'Circle City Apartments',
  image_url: 'https://www.circlecityapartments.com/img/cache/p56/c3100/91194/a44530fef90d98a764575d0d43fa94c7/Winterhouse.jpeg',
  website: 'https://www.circlecityapartments.com/',
  phone_number_unformatted: 4632098582,
  address_line_one: '1321 N Meridian St',
  address_line_two: nil,
  city: 'Indianapolis',
  state: 'IN',
  zip: 46202,
  description: "Circle City Apartments offers a blend of comfort, quality, and design. You'll find 
  this community on N Meridian St in Indianapolis.", 
  pet_limit: 2,
  dogs_allowed: 1,
  dog_restrictions: 'None',
  dog_fee: 25, 
  dog_deposit: 0, 
  cats_allowed: 1,
  cat_restrictions: 'None',
  cat_fee: 25,
  cat_deposit: 0,
  application_fee: 50,
  admin_fee: 100,
  affordability: 'luxury',
)

image_list = [
  [1, 'https://artistryindy.com/assets/images/cache/gallery_18_artistry_1260-f3b7a9ecd32e6efab1edb90657c9f988.jpg'],
  [1, 'https://artistryindy.com/assets/images/cache/Artistry-Photo-15-3c9aec77aaf9f4e6e9bdec6c33508acb.jpg'],
  [1, 'https://artistryindy.com/assets/images/cache/gallery_22_artistry_1260-ff11ecb22c2fc3d1e3f2e346d404e82d.jpg'],
  [1, 'https://artistryindy.com/assets/images/cache/gallery_11_artistry_1260-5131ad0b097db89da3bef30786abdb65.jpg']
]

image_list.each { |id, url| Image.create(property_id: id, image_url: url) }


puts 'Seeding Complete'