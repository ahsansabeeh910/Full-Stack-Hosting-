const BACKEND_URL =
"http://localhost:5000";

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