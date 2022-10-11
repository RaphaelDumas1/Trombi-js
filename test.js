async function recuperNom() {
    let database = []
    await fetch('etudiants.json')
        .then(res => res.json())
        .then((data) => database = [...data.students])
    console.log(database)
    return database
}
function generateHtml(response) {

}
async function recupererDonnees() {
    var eleves = [];
    let datab = await recuperNom();
    console.log(datab);
    for (eleve of datab) {
        console.warn(eleve);
        await fetch(`https://api.github.com/users/${eleve}`, { headers: new Headers({ "Authorization": "Bearer clef" }) })
            .then(res => res.json())
            .then((data) => eleves.push(data))
    }
    eleves.forEach(element => {
        let node = document.getElementById("test");
        //node.innerHTML += " ID : " + response.login + ", Avatar : " + response.avatar_url + ", Nombre de repository : " + response.public_repos + ", Nombre de followers : " + response.followers
        let img = $(".test").append("<img></img>");
        img.src = element.avatar_url

        let title = $(".test").append("<h2></h2>");
        title.innerHTML = element.login;

        let div = $(".test").append("<div></div>");
        div.appendChild(title)
        div.appendChild(img)

        node.appendChild(div);
    });

}