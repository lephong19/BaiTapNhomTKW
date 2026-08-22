export function initFaq() {
    const root = document.getElementById("faq"); // Tìm phần tử id=faq
    if (!root) return; // Guard clause: Thoát êm nếu trang không có #faq
  
    // lấy tất cả button có class .faq-question
    const questions = root.querySelectorAll(".faq-question");
  
    // Chạy một vòng lặp đi qua từng nút câu hỏi
    questions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        if (!answer) return;
  
        // Đóng tất cả các câu trả lời khác
        const allAnswers = root.querySelectorAll(".faq-answer");
        allAnswers.forEach((item) => {
          if (item !== answer) {
            item.style.display = "none";
          }
        });
  
        // Bật / tắt câu trả lời được chọn
        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      });
    });
  }