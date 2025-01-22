const hover = document.querySelectorAll("#dot")

hover.forEach(element => {
    element.addEventListener("mouseover", () => {

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        let color = getRandomColor();
        element.style.boxShadow = `1px 1px 6px ${color}`
        element.style.backgroundColor = color

    })

    element.addEventListener("mouseout", () => {
        setTimeout(() => {
            element.style.backgroundColor = ""
            element.style.boxShadow = ""
            element.style.transition = 'ease-out 0.5s'
        }, 400);
    })



});