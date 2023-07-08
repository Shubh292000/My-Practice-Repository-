var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var divide = document.getElementById("divide");


var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// var numDiv = document.getElementById("num");

// for (var i = 0; i < arr.length; i++) {
// //   var value = arr[i];
//   var button = document.createElement("button");
//   button.setAttribute("id", "btn" + arr[i]);
//   button.innerHTML = arr[i];
//   numDiv.appendChild(button);
// }





var numDiv = document.getElementById("num")
var inputBox = document.getElementById("input-box")

for (let index = 0; index < arr.length; index++) {
    
    var btn = document.createElement("button")
    btn.innerHTML = arr[index]
    btn.setAttribute("id","btn" + arr[index])
    numDiv.appendChild(btn)

    btn.addEventListener("click",function(event)
    {
        var clickedBtn = event.target;
        var clear = document.getElementById("clear")
        var btnValue = clickedBtn.innerHTML;
        
        if(inputBox.value!=null)
        {   

            inputBox.value += btnValue
            
        }
       
        // console.log("Value of BTN pressed" + inputBox.value);

        

    })
    
    var opbtn = document.getElementById("op-btn")
    

}


