document.addEventListener("DOMContentLoaded", function () {
  // Нийт нээгдсэн бүлгийн тоо (Шинэ unit нэмэх бүртээ энэ тоог л ихэсгэнэ)
  const TOTAL_UNITS = 10; 

  // Одоогийн байгаа хуудсыг тодорхойлох
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Цэсний гаднах хүрээг үүсгэх
  const navContainer = document.createElement("div");
  navContainer.style.cssText = "background: #263849; padding: 10px 14px; display: flex; gap: 8px; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; scrollbar-width: none;";

  // 1. Нүүр хуудасны товч
  const isHome = currentPage === "index.html" || currentPage === "";
  const homeBtn = document.createElement("a");
  homeBtn.href = "index.html";
  homeBtn.textContent = "🏠 Нүүр";
  homeBtn.style.cssText = `flex-shrink: 0; white-space: nowrap; color: white; text-decoration: none; padding: 7px 14px; border-radius: 6px; font-weight: bold; font-size: 13px; background: ${isHome ? "#b83b26" : "#34495e"};`;
  navContainer.appendChild(homeBtn);

  // 2. Unit товчнуудыг автоматаар үүсгэх
  for (let i = 1; i <= TOTAL_UNITS; i++) {
    const unitFileName = `unit${i}.html`;
    const isActive = currentPage === unitFileName;

    const btn = document.createElement("a");
    btn.href = unitFileName;
    btn.textContent = `Unit ${i}`;
    btn.style.cssText = `flex-shrink: 0; white-space: nowrap; color: white; text-decoration: none; padding: 7px 14px; border-radius: 6px; font-weight: bold; font-size: 13px; background: ${isActive ? "#b83b26" : "#34495e"};`;

    if (isActive) {
      btn.id = "active-unit-btn";
    }
    navContainer.appendChild(btn);
  }

  // 3. Header-ийн доор цэсийг байрлуулах
  const header = document.querySelector("header");
  if (header) {
    header.insertAdjacentElement("afterend", navContainer);
  }

  // 4. Тухайн нээгдсэн Unit-ийг утсан дээр харагдах байрлал руу автоматаар гүйлгэх
  setTimeout(() => {
    const activeBtn = document.getElementById("active-unit-btn");
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, 100);
});