const form = document.querySelector("form")

form.onsubmit = async (event) => {
  event.preventDefault()

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log("Dados enviados:", data);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyuwj3so75zX9PLdy4aeON2y1i8DvyG7rsx9xO9WTz5xiDqR81xwOT-DTMcTVbYk-h-/exec", {
      // redirect: "follow",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8", 
      },
      body: JSON.stringify(data),
      // mode: "no-cors"
    });

    const result = await response.json();
    alert(result.message || "Processo enviado com sucesso!");

  } catch (error) {
    alert("Erro ao enviar o processo!");
    console.error("Erro na requisição:", error);
  }
};