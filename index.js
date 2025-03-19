function updateInputs() {
    let shape = document.getElementById("shape").value;
    let inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";

    if (shape === "rectangle") {
        inputsDiv.innerHTML = `
            <label>Chiều dài:</label>
            <input type="number" id="length" placeholder="Nhập chiều dài">
            <label>Chiều rộng:</label>
            <input type="number" id="width" placeholder="Nhập chiều rộng">
        `;
    } else if (shape === "circle") {
        inputsDiv.innerHTML = `
            <label>Bán kính:</label>
            <input type="number" id="radius" placeholder="Nhập bán kính">
        `;
    } else if (shape === "triangle") {
        inputsDiv.innerHTML = `
            <label>Cạnh a:</label>
            <input type="number" id="a" placeholder="Nhập cạnh a">
            <label>Cạnh b:</label>
            <input type="number" id="b" placeholder="Nhập cạnh b">
            <label>Cạnh c:</label>
            <input type="number" id="c" placeholder="Nhập cạnh c">
        `;
    }
}

function calculate() {
    let shape = document.getElementById("shape").value;
    let output = document.getElementById("output");
    output.style.color = "#d9534f"; // Mặc định màu đỏ nếu có lỗi
    let area, perimeter;

    if (shape === "rectangle") {
        let length = parseFloat(document.getElementById("length").value);
        let width = parseFloat(document.getElementById("width").value);
        if (length <= 0 || width <= 0) {
            output.innerHTML = "Chiều dài và chiều rộng phải lớn hơn 0!";
            return;
        }
        area = length * width;
        perimeter = 2 * (length + width);
    } 
    else if (shape === "circle") {
        let radius = parseFloat(document.getElementById("radius").value);
        if (radius <= 0) {
            output.innerHTML = "Bán kính phải lớn hơn 0!";
            return;
        }
        area = Math.PI * radius * radius;
        perimeter = 2 * Math.PI * radius;
    } 
    else if (shape === "triangle") {
        let a = parseFloat(document.getElementById("a").value);
        let b = parseFloat(document.getElementById("b").value);
        let c = parseFloat(document.getElementById("c").value);

        // Kiểm tra đầu vào
        if (a <= 0 || b <= 0 || c <= 0) {
            output.innerHTML = "Các cạnh phải lớn hơn 0!";
            return;
        }

        // Kiểm tra điều kiện tạo thành tam giác
        if (a + b <= c || a + c <= b || b + c <= a) {
            output.innerHTML = "Ba cạnh không tạo thành tam giác hợp lệ!";
            return;
        }

        // Tính chu vi và diện tích theo công thức Heron
        let s = (a + b + c) / 2;
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        perimeter = a + b + c;
    }

    // Nếu không có lỗi, đổi màu kết quả thành xanh lá
    output.style.color = "#28a745";
    output.innerHTML = `Diện tích: ${area.toFixed(2)} <br> Chu vi: ${perimeter.toFixed(2)}`;
}

document.getElementById("shape").addEventListener("change", updateInputs);
updateInputs();