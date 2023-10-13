//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticles(name){
    return name.replace(/^(the|a|an)\s+/i, "");
}

touristSpots.sort((a,b)=> {
    if(removeArticles(a)>removeArticles(b))
    {
        return 1;
    }
    if(removeArticles(a)<removeArticles(b))
    {
        return -1;
    }
    return 0;
});

let ulElement = document.getElementById('band');

for(let spots of touristSpots)
{
    let liElement = document.createElement('li');
    liElement.textContent=spots;
    ulElement.appendChild(liElement);
}


