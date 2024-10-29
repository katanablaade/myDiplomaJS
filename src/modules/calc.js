const calc = () => {
  const calcBlock = document.getElementById('calc');
  const selectType = document.getElementById('calc-type');
  const selectMaterial = document.getElementById('calc-type-material');
  const inputSquare = document.getElementById('calc-input');
  const total = document.getElementById('calc-total');

  const countCalc = () => {
    const calcTypeValue = +selectType.options[selectType.selectedIndex].value;
    let calcMaterialValue = 1;
    const calcSquareValue = inputSquare.value;
    let totalValue = 0;

    if (selectMaterial.value > 1) {
      calcMaterialValue =
        +selectMaterial.options[selectMaterial.selectedIndex].value;
    }

    if (calcTypeValue && calcSquareValue) {
      totalValue = calcTypeValue * calcMaterialValue * calcSquareValue;
    } else {
      totalValue = 0;
    }
    total.value = totalValue;
  };

  if (calcBlock) {
    calcBlock.addEventListener('input', (e) => {
      if (
        e.target === selectType ||
        e.target === selectMaterial ||
        e.target === inputSquare
      ) {
        countCalc();
      }
    });
  }
};
export default calc;
