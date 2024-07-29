document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { full: 'images/flowers-yellow-large.jpg', thumb: 'images/flowers-yellow-small.jpg', caption: 'Flowers Yellow Description' },
        { full: 'images/flowers-pink-large.jpg', thumb: 'images/flowers-pink-small.jpg', caption: 'Flowers Pink Description' },
        { full: 'images/flowers-purple-large.jpg', thumb: 'images/flowers-purple-small.jpg', caption: 'Flowers Purple Description' },
        { full: 'images/flowers-red-large.jpg', thumb: 'images/flowers-red-small.jpg', caption: 'Flowers Red Description' },
        { full: 'images/flowers-white-large.jpg', thumb: 'images/flowers-white-small.jpg', caption: 'Flowers White Description' }
    ];

    const featured = document.getElementById('featured');
    const caption = document.getElementById('caption');
    const thumbnailsContainer = document.getElementById('thumbnails');

    images.forEach((image, index) => {
        const listItem = document.createElement('li');
        const thumbnail = document.createElement('img');
        thumbnail.src = image.thumb;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.addEventListener('click', () => {
            featured.src = image.full;
            caption.textContent = image.caption;
            updateThumbnails(index);
        });
        listItem.appendChild(thumbnail);
        thumbnailsContainer.appendChild(listItem);
    });

    function updateThumbnails(activeIndex) {
        const thumbnails = document.querySelectorAll('#thumbnails img');
        thumbnails.forEach((thumbnail, index) => {
            if (index === activeIndex) {
                thumbnail.style.filter = 'none';
            } else {
                thumbnail.style.filter = 'grayscale(100%)';
            }
        });
    }

    // Set initial state
    updateThumbnails(0);
});
