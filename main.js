document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    // const statusText = document.getElementById("status").value;
    
    const data = {
        to: "auliazahrasaidina@gmail.com",
        name: name,
        subject: subject,
        text: message
    };

    try {
        const response = await fetch("https://lumoshive-academy-email-api.vercel.app/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "0540540540540540540540540540540540540540540540540540540540540540"
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            document.getElementById("status").innerText = "Pesan berhasil dikirim!";
        }
        else {
            document.getElementById("status").innerText = "Gagal mengirim pesan!";
        }
        
    } catch (error) {
        document.getElementById("status").innerText = "Terjadi Kesalahan";
        console.error(error);
    }
})