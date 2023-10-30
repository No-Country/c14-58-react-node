export const convertDate = (fechaStr) => {
  if(fechaStr.split("-")){
    return fechaStr
  }
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  const partesFecha = fechaStr.split("-");
  const año = partesFecha[0];
  const mes = parseInt(partesFecha[1], 10);
  const dia = parseInt(partesFecha[2], 10);

  const fecha = new Date(año, mes - 1, dia);
  const nombreMes = meses[fecha.getMonth()];
  const fechaFormateada = `${dia} de ${nombreMes}, ${año}`;
  return fechaFormateada;
}