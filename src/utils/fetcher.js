export default async function fetcher({ path = '' }) {
  const url = `https://api.airtable.com/v0/appfE9bnrf9J3DtfC/${path}`;
  const settings = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const request = await fetch(url, settings);
    const result = await request.json();
    return { success: true, data: result?.records };
  } catch (error) {
    return { success: false, error };
  }
}
