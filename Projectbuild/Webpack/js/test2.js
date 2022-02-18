export async function fn() {
  await new Promise((resole, reject) => {
    resole("成功!");
  });
}
