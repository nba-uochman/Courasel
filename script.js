let reviews = [
  {
    id: 1,
    name: "Susan Smith",
    img: "images/person-1.jpg",
    job: "WEB DEVELOPER",
    class: "fade-in",
    class2: "fade-in-2",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie  cold-pressed   four dollar toast everyday carry."
  },
  {
    id: 2,
    name: "Anna Johnson",
    img: "images/person-2.jpg",
    job: "WEB DESIGNER",
    class: "fade-in",
    class2: "fade-in-2",
    text: "ipsum dolor sit, amet conseLoremctetur adipisicing elit. Quis nostrum voluptas modi itaque ullam tempore.ipsum dolor sit, amet conseLoremctetur adipisicing elit. Quis nostrum voluptas modi itaque ullam tempore."
  },
  {
    id: 3,
    name: "Peter Jones",
    img: "images/person-3.jpg",
    job: "INTERN",
    class: "fade-in",
    class2: "fade-in-2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sequi voluptatem quo, exercitationem recusandae excepturi beatae in nobis dolorem rem praesentium sunt sed repudiandae molestias voluptas, ad optio, quae facilis?"
  },
  {
    id: 4,
    name: "Bill Anderson",
    img: "images/person-4.jpg",
    job: "THE BOSS",
    class: "fade-in",
    class2: "fade-in-2",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in architecto neque mollitia. Ab doloribus obcaecati fuga, minima neque tempore amet reiciendis maxime at? Aperiam."
  }
]

// selectors
let img = document.getElementById("person-img");
let Name = document.getElementById("name");
let title = document.getElementById("title");
let text = document.getElementById("text");

let prevBtn = document.getElementById("arrow-prev");
let nextBtn = document.getElementById("arrow-next");
let randomBtn = document.getElementById("random-btn");

// initial current review
let currentPosition = 0;

// load initial profile
window.addEventListener("DOMContentLoaded", function(){
 showPerson(currentPosition);
});

// show any random profile
randomBtn.addEventListener("click", function(){
  currentPosition = Math.floor(Math.random() * reviews.length);

  // remove and add animation class
  toggleClass(currentPosition);
  
  showPerson(currentPosition);

});

// show next profile
nextBtn.addEventListener("click", function(){
  currentPosition++;

  // set current position to zero if current position > 4
  if(currentPosition > reviews.length - 1){
    currentPosition = 0;
  }

  toggleClass(currentPosition);

  showPerson(currentPosition);
});

// show Previous profile
prevBtn.addEventListener("click", function(){

 if(currentPosition == 0){
   currentPosition = reviews.length;
 }

 currentPosition--;

 // remove and add animation class
 toggleClass(currentPosition);

 showPerson(currentPosition);
});

// show Person
function showPerson(person){
  let item = reviews[person];

  img.src = item.img;
  img.classList.toggle(reviews[currentPosition].class);

  Name.textContent = item.name;
  Name.classList.toggle(reviews[currentPosition].class);

  title.textContent = item.job;
  title.classList.toggle(reviews[currentPosition].class);

  text.textContent = item.text;
  text.classList.toggle(reviews[currentPosition].class);
}

 // remove and add animation class
function toggleClass(animePosition){
  if( animePosition% 2 == 1){
    img.classList.toggle(reviews[animePosition].class2);
    Name.classList.toggle(reviews[animePosition].class2);
    title.classList.toggle(reviews[animePosition].class2);
    text.classList.toggle(reviews[animePosition].class2);
  }
  else{
    img.classList.toggle(reviews[animePosition].class2);
    Name.classList.toggle(reviews[animePosition].class2);
    title.classList.toggle(reviews[animePosition].class2);
    text.classList.toggle(reviews[animePosition].class2);
  }
}