let flag = true;
const throttler = (func, delay) => {
    if (flag) { func() };
    flag = false;
    setTimeout(() => {
        flag = true;
    },delay)
}

const append = () => {
    document.getElementById("box").innerHTML = null;
    document.getElementById("box").innerText = document.getElementsByTagName("input")[0].value;
}

