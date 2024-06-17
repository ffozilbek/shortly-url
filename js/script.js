const elShorterLinks = document.querySelector(".url-shortener__shorter-links"),
    elUrlShortenerForm = document.querySelector(".js-url-shortener-form"),
    elNewShortLinkCopierBtns = document.querySelectorAll(".js-url-shortener__shorter-link-button");

    elUrlShortenerForm .addEventListener("submit", (e)=> {
        e.preventDefault();
        elShorterLinks.classList.toggle("url-shortener__shorter-links--open");
    })

    elNewShortLinkCopierBtns.forEach(elNewShortLinkCopierBtn => {
        elNewShortLinkCopierBtn.addEventListener("click", ()=> {
            if(elNewShortLinkCopierBtn.contains('button--clicked')) {
                elNewShortLinkCopierBtn.classList.add("button--clicked")
            }
        })
    });