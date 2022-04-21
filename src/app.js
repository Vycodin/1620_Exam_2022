// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]
const all_contacts = document.querySelector('#display_all_contacts')
const disp_single_contact = document.querySelector('#display_single_contact')
const close_contact_button = "<button class='close_contact'>x</button>"
const contact_div = '<div id="all_contacts_card"></div>'
function loadcontacts(evt){
  console.log(all_contacts)
  for (var contact of contactsList){
  all_contacts.insertAdjacentHTML('afterbegin', contact_div)
  unique_contact_div = document.querySelector('#all_contacts_card')
  const name = '<p>' + contact.name + '</p>'
  var img = '<img src="img/' +  contact.image + '" alt="contact_photo">'
  unique_contact_div.insertAdjacentHTML('afterbegin', img)
  unique_contact_div.insertAdjacentHTML('beforeend', name)
  }
all_contacts.addEventListener('click', function(evt){displaysinglecontact(evt)})
}




















loadcontacts()