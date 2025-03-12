const form = document.querySelector("form")

form.onsubmit = async (event) => {
  event.preventDefault()

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log("Dados enviados:", data);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyTFgMfvAidN4XNptBaiVXwvdlmvTjMOHzUEUje2q8rDpobMvN4Bqb9f2SCJqcOMjEu/exec", {
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