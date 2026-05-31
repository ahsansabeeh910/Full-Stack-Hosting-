const BACKEND_URL =
"https://full-stack-hosting-7v5r.onrender.com";

async function getMessage(){

    const res =
    await fetch(
        `${BACKEND_URL}/api/message`
    );

    const data =
    await res.json();

    document.getElementById(
        "result"
    ).innerText =
    data.message;
}