



function arrayToUL(arr) {
    var s="<ul>\n";
    for (const n of arr) {
        s+="<li>n</li>\n";
    };
    return s+"</ul>\n";
}

function loadResume() {
    const r=document.getElementById("resume-content");
    const file="resume.json";
    if (r==null || file==null) {
        console.log("Load Failure");
        return;
    };
    
    
    fetch(file)
        .then((response) => response.json())
        .then((json) => {
            var s="<table id=\"resume\">";
            s+="<th><h2>Education</h2></th><br>";
            s+="<tr class=\"spacer\"></tr>";
            for (const entry of Object.keys(json['education'])) {
                // console.log(entry);
                const items=json['education'][entry];
                s+="<tr><td class=\"column1\"><h3>"+entry+"</h3></td><td class=\"column2\"></td></tr><br>";
                s+="<tr><td class=\"column1\">"+items["graduation"]+" | "+items["degree"]+"</td><td class=\"column2\"></td></tr>";
                
                
                s+="<tr>"
                if (items["coursework"]){
                    s+="<td class=\"column1\"><h4>Relevant Coursework</h4><ul>";
                    for (const course of items["coursework"]) {
                        s+="<li>"+course+"</li>"
                        // console.log(course); 
                    }
                    s+="</ul></td>";
                }
                if (items["image"]) {
                    s+="<td class=\"column2\"><img class=\"resumepic\" src="+items["image"]+"></img></td>"
                }
                s+="</tr>"

                s+="<tr class=\"spacer\"></tr>";

                // console.log(items["coursework"]);
                // console.log(Object.keys(json['education'][entry]["name"]));
                // return courses;
            };
            s+="</table>";




            s+="<table id=\"resume\">";
            s+="<th><h2>Experience</h2></th><br>";
            s+="<tr class=\"spacer\"></tr>";
            for (const entry of Object.keys(json['experience'])) {
                // console.log(entry);
                const items=json['experience'][entry];
                s+="<tr><td class=\"column1\"><h3>"+entry+"</h3>"+items["dates"]+"</td><td class=\"column2\"></td></tr><br>";
                // s+="<tr><td>"+items["degree"]+"</td><td></td></tr>";
                
                s+="<tr>"
                if (items["description"]){
                    s+="<td class=\"column1\">"+items["description"]+"</td>"
                }
                if (items["image"]) {
                    s+="<td class=\"column2\"><img class=\"resumepic\" src="+items["image"]+"></img></td>"
                }
                s+="</tr>"

                s+="<tr class=\"spacer\"></tr>";

                // console.log(items["coursework"]);
                // console.log(Object.keys(json['education'][entry]["name"]));
                // return courses;
            };
            s+="</table>";


            // console.log(s);
            r.innerHTML=s;
        });
    return;
};


function loadPortfolio() {
    const r=document.getElementById("portfolio-content");
    const file="resume.json";
    if (r==null || file==null) {
        console.log("Load Failure");
        return;
    };
    
    
    fetch(file)
        .then((response) => response.json())
        .then((json) => {
            var s="<table id=\"resume\">";
            for (const entry of Object.keys(json['portfolio'])) {
                const ds=json['portfolio'][entry]['description'];
                const dt=json['portfolio'][entry]['date'];
                const im=json['portfolio'][entry]['image'];
                s+="<tr><td class=\"column1\"><h3>"+entry+"</h3>\n"+dt+"<br><br>"+ds+"</td><td class=\"column2\"><img class=\"resumepic\" src="+im+"></img></td></tr>"
                // console.log(entry);
                s+="<tr class=\"spacer\"></tr>";
            }
            // s+="<th><h2>Education</h2></th><br>";
            // s+="<tr class=\"spacer\"></tr>";
            // for (const entry of Object.keys(json['education'])) {
                // console.log(entry);
                // const items=json['education'][entry];
                // s+="<tr><td class=\"column1\"><h3>"+entry+"</h3></td><td class=\"column2\">"+items["graduation"]+"</td></tr><br>";
                // s+="<tr><td class=\"column1\">"+items["degree"]+"</td><td class=\"column2\"></td></tr>";
                
                
                // s+="<tr>"
                // if (items["coursework"]){
                    // s+="<td class=\"column1\"><h4>Relevant Coursework</h4><ul>";
                    // for (const course of items["coursework"]) {
                        // s+="<li>"+course+"</li>"
                        // console.log(course); 
                    // }
                    // s+="</ul></td>";
                // }
                // if (items["image"]) {
                //     s+="<td class=\"column2\"><img class=\"resumepic\" src="+items["image"]+"></img></td>"
                // }
                // s+="</tr>"

                // s+="<tr class=\"spacer\"></tr>";

                // console.log(items["coursework"]);
                // console.log(Object.keys(json['education'][entry]["name"]));
                // return courses;
            // };
            s+="</table>";





            r.innerHTML=s;
        });
    return;
}


function loader() {
    const r=document.getElementById("resume-content");
    const p=document.getElementById("portfolio-content");
    if (r!=null) {
        loadResume();
    }
    if (p!=null) {
        loadPortfolio();
    }
}





window.onload=loader;