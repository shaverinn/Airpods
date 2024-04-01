export default function getHeadphones() {

    let xhr = new XMLHttpRequest();


    xhr.open('GET', 'http:localhost:8080/headphones',);

    xhr.send();

    xhr.onload = () => {
        console.log('Загружено $ {}');
    }

}

