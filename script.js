document.addEventListener("DOMContentLoaded", function () {
    const gallarySection = document.getElementById("gallary");

    //     //unsplash access Key!
    const accessKey = 'GkvqPWKsm0yK8yggOM5Fu2TN4Y32vUv1f1UNeUVleig';

    //https://api.unsplash.com
    fetch(`https://api.unsplash.com/photos/random?count=15&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const imgElement = document.createElement("img");
                imgElement.src = photo.urls.small;
                imgElement.alt = photo.alt_description;
                gallarySection.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error rasmlar yuklanmadi!!!", error));
})


function reloadPage() {
    location.reload()
}