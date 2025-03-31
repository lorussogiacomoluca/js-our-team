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
    let string = '';
    for(let i = 0; i< array.length; i++){
        let {name, role, email, img} = array[i]
        string += `
            <div class="col-sm-12 col-md-6 col-lg-4 mb-2">
                    <div class="card-member bg-black d-flex">
                        <div class="img-box bg-primary">
                            <img src="./${img}" alt="" class="img-fluid"  style="width: 70px;">
                        </div>
                        <div class="info-box text-white d-flex flex-column justify-content-between ms-2">
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
    console.log(string);
    return string
}

createString(teamMembers)


