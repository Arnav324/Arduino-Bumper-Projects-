var i = 0
var txt = 'Arduino Bumper Project List';
var speed = 25;
function epic(){
    if (i < txt.length) {
        document.getElementById("etxt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(epic, speed);
      }
}
