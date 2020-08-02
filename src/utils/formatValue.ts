const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BT', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export default formatValue;
