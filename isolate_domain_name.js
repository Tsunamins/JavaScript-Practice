let url1 = "http://github.com/carbonfive/raygun"

let url2 = "http://www.zombie-bites.com"

let url3 = "https://www.cnet.com"

let url4 = "www.xakep.ru"

let url5 = "http://google.com"

let url6 = "http://www.duj0whg838uhgqdp24-z7tgab4n.tv/index.php"

let url7 = "b1446t.biz/index.php"

let url8 = "o3zd0tun4k.de/archive/"

function domainName(url){


    let reg = new RegExp(/[\/.]/gi)
    let regResult = url.match(reg)
    console.log(regResult)
    let domain = ""

    let alter_string = url.split(reg)
    console.log(alter_string)
    if(alter_string.includes('http:') || alter_string.includes('https:')){
        if(alter_string.includes('www')){
        domain = alter_string[3]

        } else {
            domain = alter_string[2]
        }   

    } else {
        console.log("does not contain http/s")
        if(alter_string.includes('www')){
            domain = alter_string[1]
        } else {
            console.log("does not contain www")
            domain = alter_string[0]
        }
    }

    console.log(domain)
}

domainName(url8)