const apidomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    if (!apidomain) return [];

    const res = await fetch(`${apidomain}/properties`);

    if (!res.ok) {
      return new error("Failed to fetch Properties");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchProperty(id) {
  try {
    if (!apidomain) return null;

    const res = await fetch(`${apidomain}/properties/${id}`);

    if (!res.ok) {
      return new Error("Failed to fetch Single Properties");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
