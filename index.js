const office = [
    'Kelly',
    'Creed',
    'Stanley',
    'Oscar',
    'Michael',
    'Jim',
    'Darryl',
    'Phyllis',
    'Pam',
    'Dwight',
    'Angela',
    'Andy',
    'William',
    'Ryan',
    'Toby',
    'Bob'
]

var container = document.getElementById('nameContainer');

onChange = () =>{
    var str = event.target.value.toLowerCase()
    var arr = office.filter((x)=>{
        if (x.toLowerCase().includes(str)){
            return x
        }
        if (checkName(x.toLowerCase(), str)){
            return x
        }
    })
    if (arr.length > 0){
        appendNodes(arr)
    } else {
       appendNodes("no results")
    }
}

checkName = (name, str) =>{
    var firstThreeLettersStr = str.substring(0, 3)
    var pattern = firstThreeLettersStr.split("").map((x)=>{return `(?=.*${x})`}).join("");
    var regex = new RegExp(`${pattern}`, "g")
    var firstThreeLettersName = name.substring(0, 3)
    return firstThreeLettersName.match(regex);
}

appendNodes = (arr) =>{
    var container = document.getElementById('nameContainer');
    if (arr != "no results"){
        container.innerText = ""
        arr.map((x)=>{
            var p = document.createElement("P")
            p.innerText = x
            container.appendChild(p)
        })
    } else {
        container.innerText = "no results"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    appendNodes(office)
});
