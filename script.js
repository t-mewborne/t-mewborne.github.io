let meText = document.getElementById('me');
let softwareText = document.getElementById('software');
let securityText = document.getElementById('security');
let networkText = document.getElementById('network');
let designText = document.getElementById('design');

let bitMe = document.getElementById('bitme');
let bitSoftware = document.getElementById('bitsoftware');
let bitSecurity = document.getElementById('bitsecurity');
let bitNetwork = document.getElementById('bitnetwork');
let bitDesign = document.getElementById('bitdesign');

let meAssociation = [meText,bitMe]
let softwareAssociation = [softwareText,bitSoftware]
let securityAssociation = [securityText,bitSecurity]
let networkAssociation = [networkText,bitNetwork]
let designAssociation = [designText,bitDesign]

const associations = [meAssociation,softwareAssociation,securityAssociation,networkAssociation,designAssociation];

bitMe.style.display="inline-block";
//meText.style.textDecoration="underline";
associations.forEach(element => {
    console.log(element[1])
    //Hide everything
    element[0].addEventListener("mouseover",evt=>{
        associations.forEach(j=>{
            j[1].style.display="none"
        })
        //bitMe.style.display="none";
        element[1].style.display = "inline-block";
    })

    //element[0].addEventListener("mouseout", evt => {
    //    element[1].style.display = "none";
    //    bitMe.style.display="inline-block";
    //})
})