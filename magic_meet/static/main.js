const section = document.querySelector("section"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".show-modal"),
    showBtn1 = document.querySelector(".show-modal1"),
    closeBtn = document.querySelector(".close-btn");
    labelText = document.querySelector("#text");
function join_room()
{
    labelText.textContent= "Room Id"
    showBtn.addEventListener("click", () => section.classList.add("active"));
    closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
    );
    overlay.addEventListener("click", () =>
        section.classList.remove("active")
    );

}

function create_room()
{
    labelText.textContent= "username"
    overlay.addEventListener("click", () =>
        section.classList.remove("active")
    );
    closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
    );
    showBtn1.addEventListener("click", () => section.classList.add("active"));

}
