function singleSuggestion(suggestion_title) {
  return `<div class="single-suggestion">
          <h5>${suggestion_title}</h5>
          <button class="delete-suggestion" onclick="deleteSuggestion(this)">Delete</button>
        </div>`;
}
let suggestionsArray = [];
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const suggestionsList = document.querySelector(".suggestions-list");
  const singleSuggestions = document.querySelector(".single-suggestion");
  const clearBtn = document.querySelector(".search-bar-container .clear");
  const searchBtn = document.querySelector(".search-button");

  //   Search Input
  searchInput.addEventListener("input", () => {
    if (searchInput.value.length !== 0) {
      clearBtn.classList.add("shown");
    } else {
      clearBtn.classList.remove("shown");
    }
  });

  //   Clear Button
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.classList.remove("shown");
  });

  //   Search Button
  searchBtn.addEventListener("click", () => {
    if (searchInput.value !== "") {
      suggestionsList.innerHTML += singleSuggestion(searchInput.value);
      searchInput.value = "";
      clearBtn.classList.remove("shown");
      suggestionsArray.push(suggestionsList.innerHTML);
    }
  });

  suggestionsList.style.height = `${
    singleSuggestions.getBoundingClientRect().height * suggestionsArray.length
  }px`;
});

function deleteSuggestion(target) {
  target.parentElement.remove();
}

// Change Theme
let themeSwitcher = false;

function changeTheme() {
  themeSwitcher = !themeSwitcher;

  const root = document.querySelector(":root");
  const navLogo = document.querySelector("nav .logo");
  const searchIcon = document.querySelector(".search-button img");
  const ThemeIcon = document.querySelector(".theme-link i");

  root.style.setProperty("--bg", themeSwitcher ? "#ffffff" : "#121212");
  root.style.setProperty("--icon-bg", themeSwitcher ? "#f8f8f8" : "#222222");
  root.style.setProperty(
    "--border-color",
    themeSwitcher ? "#c6c6c6" : "#303030"
  );
  root.style.setProperty(
    "--placeholder-color",
    themeSwitcher ? "#757575" : "#757575"
  );
  root.style.setProperty("--white", themeSwitcher ? "#0f0f0f" : "#fff");

  navLogo.src = themeSwitcher
    ? "Img/Youtube-Logo-Black.png"
    : "Img/Youtube-Logo-White.png";

  searchIcon.style.filter = themeSwitcher ? "invert(1)" : "invert(0)";
  searchIcon.style.opacity = themeSwitcher ? "0.6" : "1";
  ThemeIcon.classList.toggle("fa-moon", themeSwitcher);
  ThemeIcon.classList.toggle("fa-sun", !themeSwitcher);
}
