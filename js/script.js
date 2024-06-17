const elShorterLinks = document.querySelector(".url-shortener__shorter-links"),
    elUrlShortenerForm = document.querySelector(".js-url-shortener-form"),
    elNewShortLinkCopierBtns = document.querySelectorAll(".js-url-shortener__shorter-link-button");

    if(elUrlShortenerForm) {
        elUrlShortenerForm .addEventListener("submit", (e)=> {
            e.preventDefault();
            elShorterLinks.classList.toggle("url-shortener__shorter-links--open");
        })
    }

    elNewShortLinkCopierBtns.forEach(elNewShortLinkCopierBtn => {
        elNewShortLinkCopierBtn.addEventListener("click", ()=> {
            elNewShortLinkCopierBtn.textContent="Copied!";
            elNewShortLinkCopierBtn.classList.add("button--clicked");
            setTimeout(() => {
                elNewShortLinkCopierBtn.textContent="Copy";
            elNewShortLinkCopierBtn.classList.remove("button--clicked");
            }, 3000);
        })
    });