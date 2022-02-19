export async function fn() {
  return await new Promise((resole, reject) => {
    resole("成功!");
  });
}
