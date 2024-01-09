const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ!#¤%&/()=?`@£$€{[]}+*あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもᚠᚢᚦᚨᚱᚹᚺᚻᚾᛁᛃᛇᛈᛉᛊᛋᛏᛒᛖᛗᛚᛜᛞᛟ";

let interval = null;
777847845895
document.querySelector("#messenger").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 89)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 15;
  }, 40);
}
