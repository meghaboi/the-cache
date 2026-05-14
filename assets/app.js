(function () {
  var progress = document.querySelector(".scroll-progress");
  function updateProgress() {
    if (!progress) return;
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = amount + "%";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  var filters = document.querySelectorAll(".filter-button");
  var cards = document.querySelectorAll(".catalogue-filter-target .artifact-card");
  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");
      filters.forEach(function (item) {
        item.classList.toggle("active", item === button);
      });
      cards.forEach(function (card) {
        var show = filter === "all" || card.getAttribute("data-collection") === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  var toastTimer;
  function showToast() {
    var toast = document.querySelector(".copy-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "copy-toast";
      toast.textContent = "Reference copied.";
      document.body.appendChild(toast);
    }
    clearTimeout(toastTimer);
    toast.style.display = "block";
    toastTimer = setTimeout(function () {
      toast.style.display = "none";
    }, 2000);
  }

  document.querySelectorAll(".copy-id").forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.getAttribute("data-copy");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(showToast).catch(showToast);
      } else {
        showToast();
      }
    });
  });
})();
