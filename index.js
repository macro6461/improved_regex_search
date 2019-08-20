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
    var str = event.target.value.toLowerCase().substring(0, 3)
    var filteredArr = office.filter((x)=>{
        var xSub = x.substring(0, 3).toLowerCase()
        return x.toLowerCase().includes(str) || checkName(xSub, str)
    })
    if (filteredArr.length > 0){
        appendNodes(filteredArr)
    } else {
       appendNodes("no results")
    }
}

checkName = (name, str) =>{

    var pattern = str.split("").map((x)=>{return `(?=.*${x})`}).join("");
    var regex = new RegExp(`${pattern}`, "g")

    return name.match(regex);
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
