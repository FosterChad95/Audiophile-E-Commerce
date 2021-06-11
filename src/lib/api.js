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

  if (!type) {
    return items;
  }

  const filtered = items.filter((el) => el.category === type);

  return filtered;
}

export async function getSingleProduct(product) {
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

  const filtered = items.filter((el) => el.name === product);
  return filtered;
}

export async function checkoutInformation(info) {
  const response = await fetch(`${FIREBASE_DOMAIN}/customerData.json`, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Could not submit your order");
  }
}
