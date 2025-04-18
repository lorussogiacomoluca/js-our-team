const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

const createString = (array) => {
    //Create empty string
    let string = '';
    //FOR Loop: generete HTML String
    for(let i = 0; i< array.length; i++){
        //Destructuring
        let {name, role, email, img} = array[i]
        //String Concatenate
        string += `
            <div class="col-sm-12 col-md-6 col-lg-4 mb-2 text-center text-md-start">
                    <div class="card-member bg-black d-md-flex p-sm-2 p-md-0">
                        <div class="col-sm-12 col-md-6 col-lg-4 img-box ">
                            <img src="./${img}" alt="" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-8 info-box text-white d-flex flex-column justify-content-between ms-md-4">
                            <div class="row d-flex flex-column justify-content-around mb-2">
                                <div class="name">${name}</div>
                                <div class="role">${role}</div>
                            </div>
                            <div class="row">
                                <div class="email">${email}</div>
                            </div>
                        </div>
                    </div>        
                </div> 
            `
        }
    //Return FULL html string
    return string
}


//Rendering function
const renderCards = (array) => {
    //Invoke createString function to get string
    let string = createString(array)
    //InnerHTML String
    document.getElementById('team-member').innerHTML = string
}

//Rendering
renderCards(teamMembers)

//INSERT NEW MEMBER
const inputName = document.getElementById('name')
const inputRole = document.getElementById('role')
const inputEmail = document.getElementById('email')
const inputImage = document.getElementById('image')
const button = document.getElementById('btn-submit')

button.addEventListener('click', (e) =>{
    e.preventDefault()
   const name = inputName.value;
   const role = inputRole.value;
   const email = inputEmail.value;
   const img = `img/${inputImage.value}`;

   console.log(image);

   if(!name || !role || !email || !image){
    alert('Devi inserire tutti i campi')
   }

   const newMember = {
    name,
    role,
    email,
    img
   }

   teamMembers.push(newMember)
   renderCards(teamMembers)
   
})

