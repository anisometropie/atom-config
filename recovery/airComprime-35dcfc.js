/*
(\d+\.*\d*)
ctx.(save|beginPath|clip|translate|fill|stroke|restore|scale|rotate|fillStyle|lineWidth|lineCap|lineJoin|miterLimit)(\(.*\)|.+)
(ctx\.closePath\(\))(\n.+)+(ctx\.closePath\(\))
*/

export const airComprime = {
  draw: function(ctx, size) {
    const s = size / 200
    ctx.moveTo(14 * s, 0.0511576373 * s)
    ctx.lineTo(14 * s, 54 * s)
    ctx.lineTo(60.2251739 * s, 40.3707305 * s)
    ctx.lineTo(60.2251739 * s, 15 * s)
    ctx.lineTo(14 * s, 0.0511576373 * s)
    ctx.closePath()
  }
}
