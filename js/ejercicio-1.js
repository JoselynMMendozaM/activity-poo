class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  function calcularArea() {
    const base = parseFloat(document.getElementById("txtNumero1").value);
    const height = parseFloat(document.getElementById("txtNumero2").value);
  
    const triangle = new Triangle(base, height);
    const area = triangle.calculateArea();
  
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `El área del triángulo es: ${area}`;
  }
  