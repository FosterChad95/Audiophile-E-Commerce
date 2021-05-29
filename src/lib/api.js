const FIREBASE_DOMAIN = "https://audiophile-50083-default-rtdb.firebaseio.com";

export async function getData(type) {
  const response = await fetch(`${FIREBASE_DOMAIN}/.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get data");
  }

  const items = [];

  for (const key in data) {
    const itemsObj = {
      id: key,
      ...data[key],
    };

    items.push(itemsObj);
  }

  return items.filter((el) => el.category === type);
}
