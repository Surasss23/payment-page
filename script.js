fetch("https://script.google.com/macros/s/AKfycbyZceFHHzvLw8f-VBp2HgcjiCG405W9U5MmzgVxUeDM-9BxJalG-kjh9q0vXhypAJQ/exec")
.then(res => res.json())
.then(data => {

  const participants = data.participants.slice(1);
  const winner = data.winner[1];
  const settings = data.settings;

  const list = document.getElementById("participants");

  participants.forEach(p => {
    const li = document.createElement("li");
    li.innerText = `${p[1]} • ₹${p[3]}`;
    list.appendChild(li);
  });

  if (settings[1][1] === "YES") {
    document.getElementById("winner").classList.remove("hidden");
    document.getElementById("winnerName").innerText = winner[1];
    document.getElementById("proofImg").src = winner[2];

    const upi = settings[2][1];
    const date = winner[0];

    document.getElementById("payBtn").href =
      `upi://pay?pa=${upi}&pn=Porter Winner&am=20&cu=INR&tn=${date} Porter Winner`;
  }

});