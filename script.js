document.addEventListener("DOMContentLoaded", function() {
    const gallarySection = document.getElementById("gallary");

    //unsplash access Key!
    const accessKey = 'YOUR_ACCESS_KEY';

   //https://api.unsplash.com

   fetch(`https://api.unsplash.com/photos/random?count=20&client_id=${accessKey}`)
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