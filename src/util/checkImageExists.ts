export default async function checkImageExists(imageUrl: string) {
  return fetch(imageUrl, { method: "HEAD" })
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.error("Error checking image:", error);
      return false;
    });
}
