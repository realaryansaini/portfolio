// let project_container = document.getElementById("project_container")

let projects = [
    {
        "title": "Canva design to web page",
        "image": "landscape_hospital_finance.png",
        "repo": "hospital_finance",
        "site":"https://realaryansaini.github.io/hospital_finance"

    },
    {
        "title": "Static website for a college",
        "image": "Navals_College.png",
        "repo": "Navals_College",
        "site":"https://realaryansaini.github.io/Navals_College"
    },
    {
        "title": "Max - A link shortner webisite",
        "image": "landscape_hospital_finance.png",
        "repo": "max_site",
        "site":"https://max-ten.vercel.app/"
    }
]

for (let item of projects) {
    // console.log(item);
    let html_templet = ` <div class="project">
                    <img src="./public/${item.image}" alt="" class="project_img">
                    <div class="project_title">
                        <a href="" class="anchor">${item.title}</a>
                    </div>
                    <div class="project_btns">
                        <a class="project_btn anchor" href="${item.repo}/"
                            target="_blank">See Live</a>
                        <a class="project_btn anchor" href="https://github.com/realaryansaini/${item.repo}"
                            target="_blank">Source Code</a>
                    </div>
                </div>`
    document.getElementById("project_container").insertAdjacentHTML("afterbegin",html_templet)
}